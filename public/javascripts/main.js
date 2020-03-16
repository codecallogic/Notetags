tinymce.init({
      selector: '.Typehere',
      width: '100%',
      format: 'text',
      plugins: 'advlist autolink autosave wordcount link visualblocks lists code charmap print preview insertdatetime hr anchor pagebreak spellchecker nonbreaking table contextmenu directionality emoticons template textcolor paste a11ychecker advcode casechange formatpainter linkchecker autolink checklist media mediaembed pageembed permanentpen powerpaste advtable tinycomments tinymcespellchecker',
      toolbar: 'a11ycheck addcomment showcomments casechange checklist code formatpainter pageembed permanentpen table',
      toolbar_mode: 'floating',
      tinycomments_mode: 'embedded',
      tinycomments_author: 'Author name',
});

const tagContainer = document.querySelector('.tag-container')
const input = document.querySelector('.tag-container input')
const form = document.querySelector('#form')
const database = document.getElementById('database')

let tags = []

if(database){
      let split = database.split(',')
      tabs = split
}

function createTag(label){
      const div = document.createElement('div');
      div.setAttribute('class', 'tag');
      const span = document.createElement('span')
      span.innerHTML = label
      const closeIcon = document.createElement('i')
      closeIcon.innerHTML = 'close';
      closeIcon.setAttribute('class', 'material-icons')
      closeIcon.setAttribute('data-item', label)
      div.appendChild(span)
      div.appendChild(closeIcon)
      return div
}

function addTags(){
      reset()
      tags.slice().reverse().forEach( t => {
            const tag = createTag(t)
            tagContainer.prepend(tag)
      })
      let tagValues = document.querySelectorAll(".tag > span")
      let postHidden = document.getElementById("tagValue")
      let values = []
      tagValues.forEach( e => {
            values.push(e.innerText)
      })
      postHidden.setAttribute('value', values)
}

function reset(){
      document.querySelectorAll('.tag').forEach( t => {
            t.parentElement.removeChild(t)
      })
}

document.addEventListener('click', function(e){
      if(e.target.tagName === 'I'){
            const value = e.target.getAttribute('data-item')
            const index = tags.indexOf(value)
            tags = [...tags.slice(0,index), ...tags.slice(index + 1)]
            addTags()
      }
})

input.addEventListener('keyup', function(e){
      if(e.keyCode === 13){
            tags.push(input.value)
            addTags()
            input.value = '';
      }
})

form.addEventListener('keydown', function(e){
      if(e.keyCode === 13){
            e.preventDefault()
      }
})