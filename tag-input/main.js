(function init(window) { 
  //create a module that stores the value
  const [inputValue, setInputValue] = useState("");
  const [tagList, setTagList] = useState([
    {
      id: 1,
      text: "foo"
    },
    {
      id: 2,
      text: "var"
    }, 
    {
      id: 3,
      text: "bar"
    },
    {
      id: 4,
      text: "biz"
    }
  ]);
  let APP = window.APP || {};
  APP.state = {
    inputValue,
    setInputValue
  };

  APP.tag = {
    tagList,
    setTagList,
    createTag
  };
  window.APP = APP;
})(window);

renderTagList(window.APP.tag.tagList);


//listen for changes on tag input
(function listenForChangesOnInput(window) {
  const { setInputValue } = window.APP.state;

  const input = document.querySelector(".js-tag-input");

  const APP = window.APP;

  input.addEventListener("input", (e) => {
    //on change store input in memeory
    setInputValue(e.target.value);
  });

  window.APP = APP;
})(window);



//listen for enter press
(function listenForEnterPress(window) {
})(window);


//on enter press create tag from stored value in memory

//add tag to list

//render tag list to dom


//empty input value in memory and update dom with that empty value for input




//utility functions 
function useState(initialState) {
  const state = {
    value: initialState 
  }

  function setState(newState) {
    state.value = newState;
  }

  return [state.value, setState];
};

function createTag(tagText) {
  return (`
    <span class="tag js-tag">
      <span class="tag__text">${tagText}</span>
      <button class="tag__remove-button js-tag__remove-button">X</button>
    </span>
  `)
}

function renderTagList(tagList) {
  //todo cache input-container in APP
  const inputContainer = document.querySelector(".js-input-container");
  const elementList = tagList.map((tag) => {
    return createTag(tag.text);
  });

  //add input at the end
  elementList.push(`<input class="tag-input js-tag-input" type="text" />`);

  const htmlString = elementList.join("");

  inputContainer.innerHTML = htmlString;
}