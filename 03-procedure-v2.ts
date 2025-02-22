export function setupSpeaker() {
  console.log('Turn on the speaker')
  console.log('Turn on the microphone')
}

export function teardownSpeaker() {
  console.log('Turn off the microphone')
  console.log('Turn off the speaker')
}

function speak(lines: string[]) {
  setupSpeaker()
  for (let line of lines) {
    console.log(line)
  }
  teardownSpeaker()
}

console.log('== Session 1 ==')

speak(['Hello, World!', 'How are you?'])

console.log('== Session 2 ==')

speak(['Hello, TypeScript!', 'I love programming in TypeScript!'])
