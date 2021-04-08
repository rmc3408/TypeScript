
enum ProjectStatus { active, finished }

class Project {
    constructor(
        public id: string,
        public title: string,
        public desc: string,
        public people: number,
        public status: ProjectStatus ) {    
    }
}

type ListenerT<T> = (items: T[]) => void;

class State<T> {
    protected listeners: ListenerT<T>[] = [];

    addListener(listFn: ListenerT<T>) {
        this.listeners.push(listFn);
    }
}

class ProjectState extends State<Project>{
    private projects: Array<Project> = [];
    private static instance: ProjectState;
    
    constructor() {
        super();
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance; 
    }

    addProjects(t: string, d: string, p: number) {
        const newP: Project = new Project(Math.random().toString(), t, d, p, ProjectStatus.active );
        this.projects.push(newP);
        for (let eachFn of this.listeners) {
            eachFn(this.projects.slice());
        }
    }
}

const myApp: ProjectState = ProjectState.getInstance();

interface validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    minNum?: number;
    maxNum?: number;
}

function validate(input: validatable) {
    let isValid = true;
    if (input.required && typeof input.value === 'string') {
        isValid = isValid && input.value.toString().length !== 0;
        if (input.minLength != null) {
            isValid = isValid && input.value.toString().length > input.minLength;
        }
        if (input.maxLength != null) {
            isValid = isValid && input.value.toString().length < input.maxLength;
        }
    }
    if (typeof input.value === 'number' && input.minNum != null) {
        isValid = isValid && input.value >= input.minNum;
    }
    if (typeof input.value === 'number' && input.maxNum != null) {
        isValid = isValid && input.value <= input.maxNum;
    }
    return isValid;
}

function Autobind(_1: any, _2: string, desc: PropertyDescriptor) {
    const origFn = desc.value;
    const newFn: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = origFn.bind(this);
            return boundFn;
        }
    }
    //console.log(newFn)
    return newFn;
}

//BaseClass
abstract class Component<T extends HTMLTemplateElement, U extends HTMLDivElement, S extends HTMLElement> {
    templateEl: T;
    hostEl: U;
    sectionEl: S;

    constructor(templateId: string, hostId: string, isInsertAttach: boolean, newElementId?: string) {
        
        this.hostEl = document.getElementById(hostId)! as U;
        this.templateEl = document.getElementById(templateId)! as T;

        const bigNode = document.importNode(this.templateEl.content, true);
        this.sectionEl = bigNode.firstElementChild as S;
        if (newElementId) this.sectionEl.id = newElementId;

        this.attach(isInsertAttach);
    }
    private attach(insertWhere: boolean) {
        this.hostEl.insertAdjacentElement(insertWhere ? 'afterbegin' : 'beforeend', this.sectionEl);
    }
    abstract configure(): void;
    abstract renderHeader(): void;
}

class ProjectInput extends Component<HTMLTemplateElement, HTMLDivElement, HTMLElement>{
    titleEl: HTMLInputElement;
    descriptionEl: HTMLInputElement;
    peopleEl: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, `user-input`);
        
        this.titleEl = this.sectionEl.querySelector('#title')! as HTMLInputElement;
        this.descriptionEl = this.sectionEl.querySelector('#description')! as HTMLInputElement;
        this.peopleEl = this.sectionEl.querySelector('#people')! as HTMLInputElement;
        this.sectionEl.addEventListener('submit', this.submitHandler);
    }

    configure() { }

    renderHeader() { }
    

    @Autobind
    private submitHandler(evt: Event): [string, string, number] | null {
        evt.preventDefault();
        
        let tripleUser: [string, string, number] = [this.titleEl.value, this.descriptionEl.value, parseInt(this.peopleEl.value)];
        
        //console.log(tripleUser);
        if (Array.isArray(tripleUser)) {
            //const [t, d, p] = tripleUser;
        }
        const [t, d, p] = tripleUser;
        const titleValidatable: validatable = {
            value: t,
            required: true,
            minLength: 3
        }
        const descriptionValidatable: validatable = {
            value: d,
            required: true,
            minLength: 3
        }
        const peopleValidatable: validatable = {
            value: p,
            required: true,
            minNum: 2,
            maxNum: 9
        }
        const resultTitle = validate(titleValidatable);
        const resultdesc = validate(descriptionValidatable);
        const resultpeople = validate(peopleValidatable);
        //console.log(resultTitle, resultdesc, resultpeople);

        if (resultTitle && resultdesc && resultpeople) {
            //console.log(tripleUser);
            myApp.addProjects(t, d, p);
            this.clearForm();
            return tripleUser;
        } else {
            alert('Please, check the values!');
            return null;
        }
    }

    private clearForm() {
        this.titleEl.value = '';
        this.descriptionEl.value = '';
        this.peopleEl.value = '';
    }

}

class ProjectList extends Component<HTMLTemplateElement, HTMLDivElement, HTMLElement> {    
    
    titleEl: HTMLHeadingElement;
    listEl: HTMLUListElement;

    private assignedPrjs: Project[] = [];

    constructor(private opt: 'active' | 'finished') {
        super('project-list', 'app', false, `${opt}-projects`);
        
        this.titleEl = this.sectionEl.querySelector('h2')! as HTMLHeadingElement;
        this.listEl = this.sectionEl.querySelector('ul')! as HTMLUListElement;

        this.configure();
        this.renderHeader();
    }

    configure() {
        myApp.addListener((prjs: Array<Project>) => {
            const activeProjects = prjs.filter(p => p.status === ProjectStatus.active);
            const finishedProjects = prjs.filter(p => p.status === ProjectStatus.finished);
            const loadProjects = (this.opt === 'active') ? activeProjects : finishedProjects;
            this.assignedPrjs = loadProjects;
            this.renderProjects();
        });
    }

    renderProjects() {
        this.listEl.innerHTML = '';
        for (let item of this.assignedPrjs) {
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            this.listEl.appendChild(listItem);
        }
    }

    renderHeader() {
        this.titleEl.id = `${this.opt}-projects-list`;
        this.titleEl.innerHTML = `${this.opt} projects`.toUpperCase();

        this.listEl.id = `${this.opt}-projects-list`;
    }
}

const prj1 = new ProjectInput();
const prjList1 = new ProjectList('active');
const prjList2 = new ProjectList('finished');
