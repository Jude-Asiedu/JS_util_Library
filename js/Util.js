// Keyword here is export
export function add(numbers){
     let sum = 0;
    for(const n of numbers){
        sum += n;
    }
    return sum;
}


export function multiply(integer){
    let result = 0;
   for(const b of integer){
    result *= b;
   }
   return result;
}

// This allows us to create a new data for an existing array of data without 
// fecthing from the  APi endpoint again but inserting into our local array
export function AddNewProfile(object){
    let collectionData = [];
    collectionData.unshift(object);
}


export function UpdateProfile( string ){
    let OriginalData =  ['Shift','Push' ,'Pop','Unshift','Map' ];
    let collectionEditData = ['Shift','Push' ,'Pop','Unshift','Map' ];

    // Use find function to get the Object we are updating from the array (in this case Pop)
    const stringToEdit = collectionEditData.find((result) => { return result === "Pop" }) 
    const index =  collectionEditData.indexOf(stringToEdit);
    collectionEditData[index] = string;
    return 'This is the oringal array : ' + OriginalData   + '\n and after the editing : ' + collectionEditData;


    // CASE TWO : With TypeScript
    // const _selectedDataforUpdate = this.merchantOfficeData.find((results:tfMerchantProductOfficeDetails)=>{ return  results.merchantId === this.merchantOfficeFormDetails.merchantId});
    // const index = this.merchantOfficeData.indexOf(_selectedDataforUpdate);
    // this.merchantOfficeData[index] = data.data
    // console.log(this.merchantOfficeData[index])
   
}