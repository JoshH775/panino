export function addOnClick (selector: string, callback: () => void) {
  const elements = document.querySelectorAll(selector)
  if (!elements || elements.length === 0) {
    console.warn(`No elements found for selector: ${selector}`)
    return
  }
  elements.forEach((element) => {
    element.addEventListener('click', callback)
  })
}