export default (context, inject) => {

  const capitalizeFirstLetter = (string) => {return string.charAt(0).toUpperCase() + string.slice(1);}


  // Inject $hello(msg) in Vue, context and store.
  inject('capitalizeFirstLetter', capitalizeFirstLetter)

}
