function alterarStatus(id) {
    let click = document.getElementById(`game-${id}`);
    let blur = click.querySelector(`.dashboard__item__img`);
    let bot = click.querySelector(`.dashboard__item__button`);
    let nome = click.querySelector(`.dashboard__item__name`);
    
    alert("Você reservou " + nome.textContent);
}