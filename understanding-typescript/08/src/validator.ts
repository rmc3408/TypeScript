interface ValidatorConfig {
  [property: string]: { [validatableProp: string]: string[] };
  // a : { b: ['required', 'positive'] }
}
const validObj: ValidatorConfig = {}


// Property decorator
function Requiring(target: any, propName: string) {
  console.log('Requiring function', propName)

  const propA = target.constructor.name
  let valuePropA = ['']
  switch (propName) {
    case 'title':
      valuePropA = ['required']
      break;
    case 'price':
      valuePropA = ['positive']
      break;
    default:
      break;
  }
  validObj[propA] = {
    ...validObj[propA],
    [propName]: valuePropA,
  }
}


function validate(courseObj: any) {
  const obj = validObj[courseObj.constructor.name];
  if (!obj) {
    return true;
  }

  let isValid = true;

  for (let prop in obj) {
    for (const validator of obj[prop]) {
      //console.log(validator, prop)
      switch (validator) {
        case "required":
          isValid = isValid && !!courseObj[prop];
          break;
        case "positive":
          isValid = isValid && courseObj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {

  @Requiring
  title: string;

  @Requiring
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert('Invalid input, please try again!');
    return;
  }
  console.log(createdCourse);
});