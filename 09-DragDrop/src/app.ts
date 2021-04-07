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
            console.log(tripleUser);
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

const prj1 = new ProjectInput();