const productValidation = ({ title, description, imageURL, price }, tempColor) => {
  const errors = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    tempColor: "",
  };
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(imageURL);


  if (!title.trim() || title.length < 10 || title.length > 80) {
    errors.title = "Product title must be between 10 and 80 characters";
  }
  if (!description.trim() || description.length < 10 || description.length > 80) {
    errors.description = "Product description must be between 10 and 80 characters";
  }
  if (!imageURL.trim() || !validUrl) {
    errors.imageURL = "Invalid Image URL!";
  }
  if (!price.trim() || isNaN(Number(price))) {
    errors.price = "Invalid Price Input!";
  }
  if (tempColor.length < 1 || tempColor.length > 4) {
    errors.tempColor = "Please select 1 to 4 colors!";
  }
  return errors; 
};
export default productValidation;

