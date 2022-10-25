/**
 * 
 * INDEX TYPE
 * 
 * properties can have any name but type defined and all same type
 * and 
 * how many is necessary.
 */

interface errorContainer {
    //id: number must be same type of index.
    id: string,
    [props: string]: string,
}

const bag: errorContainer = {
    id: 'name',
    email: 'not valid',
    username: 'twenty'

};

