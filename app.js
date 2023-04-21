const items = document.querySelectorAll('.item')
const placeholders = document.querySelectorAll('.placeholder')

items.forEach((item) => {
	item.addEventListener('dragstart', dragstart)
	item.addEventListener('dragend', dragand)
});


for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragover) //над столбцом
	placeholder.addEventListener('dragenter', dragenter) //заходим на территорию
	placeholder.addEventListener('dragleave' , dragleave) //перетащили, но вышли
	placeholder.addEventListener('drop', dragdrop) //отпустили
}

function dragstart(event) {
	event.target.classList.add('hold')
	setTimeout(()=> event.target.classList.add('hide'), 0)
	
}

function dragand(event) {
	event.target.classList.remove("hold", "hide")
}

function dragover(event) {
	event.preventDefault()
}

function dragenter(event) {
	event.target.classList.add('hovered')
}

function dragleave(event) {
	event.target.classList.remove('hovered')
}

function dragdrop(event) {
	let currentItem = document.querySelector(".hold")
	event.target.classList.remove("hovered")
	event.target.append(currentItem)
}