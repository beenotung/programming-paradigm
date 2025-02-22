function setupSpeaker() {
  console.log('Turn on the speaker')
  console.log('Turn on the microphone')
}

function teardownSpeaker() {
  console.log('Turn off the microphone')
  console.log('Turn off the speaker')
}

console.log('== Session 1 ==')

setupSpeaker()
console.log('Hello, World!')
console.log('How are you?')
teardownSpeaker()

console.log('== Session 2 ==')

setupSpeaker()
console.log('Hello, TypeScript!')
console.log('I love programming in TypeScript!')
teardownSpeaker()
