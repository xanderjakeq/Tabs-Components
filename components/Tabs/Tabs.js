class Tabs{
  constructor(container){
    this.links = container.querySelectorAll('.tabs-link')
    // collect TabLink Objects
    this.newLinks = Array.from(this.links).map(link => new TabLink(link))
    this.links[0].classList.add('tabs-link-selected')

    this.current = this.links[0].dataset.tab
    container.addEventListener('click', (e) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      if(e.target.dataset.tab !== this.current && e.target.dataset.tab){  
        this.select()
        this.current = e.target.dataset.tab
      }
=======
>>>>>>> parent of 061854e... fixed bug where selecting a selected tab would deselect it
=======
>>>>>>> parent of 061854e... fixed bug where selecting a selected tab would deselect it
      this.select()
      this.current = e.target.dataset.tab
=======
      if(e.target.dataset.tab !== this.current){  
        this.select()
        this.current = e.target.dataset.tab
      }
>>>>>>> 061854e6488a66e7b9c5d2555a03ebabb2fd5d13
    })
  }
  select(){
    this.newLinks.forEach(link => {
      // console.log(link.data, this.current)
      // console.log(this.current)
      if(link.data === this.current){
        link.deselect()
      }
    })
  }
}


class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element 
    // Get the custom data attribute on the Link
    // this.data;
    this.data = element.dataset.tab
    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(`.tabs-item[data-tab = '${this.data}']`)
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement)
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select())
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;
    const links = document.querySelectorAll('.tabs-link')
    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    
    // links.forEach(link => {
    //   link.classList.remove('tabs-link-selected')
    // })


    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add('tabs-link-selected')
    
    // Call the select method on the item associated with this link
    this.tabItem.select()
  }

  deselect(){
    this.element.classList.remove('tabs-link-selected')
    this.tabItem.deselect()
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
    this.element = element
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;
    const items = document.querySelectorAll('.tabs-item')
    // Remove the class "tabs-item-selected" from each element
    // items.forEach(item => item.classList.remove('tabs-item-selected'))
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add('tabs-item-selected')
  }

  deselect(){
    this.element.classList.remove('tabs-item-selected')
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

// const links = document.querySelectorAll('.tabs-link');
//  links.forEach( link => new TabLink(link) )


const containers = document.querySelectorAll('.tabs')
containers.forEach(container => new Tabs(container))