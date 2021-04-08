type newProject = {
    id: string,
    title: string,
    desc: string,
    people: number
}

class ProjectState {
    private projects: Array<any> = [];
    private static instance: ProjectState;
    private listeners: any[] = [];

    constructor() {
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance; 
        
    }

    addListener(listFn: Function) {
        this.listeners.push(listFn);
    }

    addProjects(t: string, d: string, p: number) {
        const newP: newProject = {
            id: Math.random().toString(),
            title: t,
            desc: d,
            people: p
        };
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

class ProjectInput {
    templateEl: HTMLTemplateElement;
    hostEl: HTMLDivElement;
    formEl: HTMLFormElement;

    titleEl: HTMLInputElement;
    descriptionEl: HTMLInputElement;
    peopleEl: HTMLInputElement;

    constructor() {
        this.templateEl = document.getElementById('project-input')! as HTMLTemplateElement;
        const bigNode = document.importNode(this.templateEl.content, true);

        //get first element = <FORM>
        this.formEl = bigNode.firstElementChild as HTMLFormElement;
        
        //Add id to import
        this.formEl.id = 'user-input';


        this.titleEl = this.formEl.querySelector('#title')! as HTMLInputElement;
        this.descriptionEl = this.formEl.querySelector('#description')! as HTMLInputElement;
        this.peopleEl = this.formEl.querySelector('#people')! as HTMLInputElement;
        
        //console.log(this.titleEl);

        this.configure();

        this.hostEl = document.getElementById('app')! as HTMLDivElement;
        this.attach();
    }

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

    
    private configure() {
        this.formEl.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        this.hostEl.insertAdjacentElement('afterbegin', this.formEl);
    }

}

class ProjectList {
    templateEl: HTMLTemplateElement;
    hostEl: HTMLDivElement;
    sectionEl: HTMLElement;

    titleEl: HTMLHeadingElement;
    listEl: HTMLUListElement;

    private assignedPrjs: newProject[] = [];

    constructor(private opt: 'active' | 'finished') {
        this.hostEl = document.getElementById('app')! as HTMLDivElement;
        this.templateEl = document.getElementById('project-list')! as HTMLTemplateElement;
        const bigNode = document.importNode(this.templateEl.content, true);

        //get first element = <FORM>
        this.sectionEl = bigNode.firstElementChild as HTMLElement;
        this.sectionEl.id = `${this.opt}-projects`;
        
        this.titleEl = this.sectionEl.querySelector('h2')! as HTMLHeadingElement;
        this.listEl = this.sectionEl.querySelector('ul')! as HTMLUListElement;

        myApp.addListener((prjs: newProject[]) => {
            this.assignedPrjs = prjs;
            this.renderProjects();
        });

        this.attach();
        this.renderHeader();

    }


    private attach() {
        this.hostEl.insertAdjacentElement('beforeend', this.sectionEl);
    }
    private renderHeader() {
        this.titleEl.id = `${this.opt}-projects-list`;
        this.sectionEl.querySelector('ul')!.id = `${this.opt}-projects-list`;
        this.titleEl.innerHTML = `${this.opt} projects`.toUpperCase();
    }

    private renderProjects() {
        //const sectionEl = document.querySelector('ul')! as HTMLUListElement;
        //sections.querySelector('ul')!.id = `${this.opt}-projects-list`;
        for (let item of this.assignedPrjs) {
            const listItem = document.createElement('li');
            listItem.textContent = item.title;
            this.listEl.appendChild(listItem);
        }
    }

}

const prj1 = new ProjectInput();
const prjList1 = new ProjectList('active');
const prjList2 = new ProjectList('finished');
