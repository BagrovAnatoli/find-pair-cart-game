function renderFirstScreen(component) {
    component.appendChild(templateEngine(firstScreenTemplate));

    setDifficultyHandler(component);

    setStartHandler(component);
}

function setDifficultyHandler(component) {
    const difficultyBlock = component.querySelector('.difficulty');
    difficultyBlock.addEventListener('click', (event) => {
        const target = event.target;
        clearSelect(difficultyBlock);
        if (target.classList.contains('difficulty__button')) {
            window.appState.difficulty = target.dataset.difficulty;
            console.log(`Выбрана сложность ${window.appState.difficulty}`);
            target.classList.add('difficulty__button_selected');
        }
    });
}

function clearSelect(difficultyBlock) {
    const buttons = difficultyBlock.querySelectorAll('.difficulty__button');
    buttons.forEach(button => {
        button.classList.remove('difficulty__button_selected');
    });
}

function setStartHandler(component) {
    const startButton = component.querySelector('.button');
    startButton.addEventListener('click', (event) => {
        event.preventDefault;
        console.log(`Открыть игру на сложности ${window.appState.difficulty}`);
        clearElement(component);
        window.timer.start();
        renderGameScreen(component);
    });
}

const firstScreenTemplate = {
    tag: 'div',
    cls: 'screen',
    content: {
        tag: 'div',
        cls: 'window',
        content: {
            tag: 'div',
            cls: 'window__content',
            content: [
                {
                    tag: 'div',
                    cls: 'window__title',
                    content: 'Выбери сложность'
                },
                {
                    tag: 'div',
                    cls: 'difficulty',
                    content: [
                        templateDifficultyButton(1),
                        templateDifficultyButton(2),
                        templateDifficultyButton(3),
                    ]
                },
                {
                    tag: 'button',
                    cls: ['button', 'window__button'],
                    content: 'Старт'
                }
            ]
        }
    }
};

function templateDifficultyButton(difficultyNumber) {
    return {
        tag: 'div',
        cls: 'difficulty__button',
        attrs: {
            'data-difficulty': `${difficultyNumber}`,
        },
        content: `${difficultyNumber}`
    }
}

{/* <div class="screen">
    <div class="window">
        <div class="window__content">
            <div class="window__title">Выбери сложность</div>
            <div class="difficulty">
                <div class="difficulty__button" data-difficulty="1">1</div>
                <div class="difficulty__button" data-difficulty="2">2</div>
                <div class="difficulty__button" data-difficulty="3">3</div>
            </div>
            <button class="button window__button">Старт</button>
        </div>
    </div>
</div> */}