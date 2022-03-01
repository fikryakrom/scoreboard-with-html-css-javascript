export default class ScoreboardView {
	constructor(root, Japan, SouthKorea, onControlButtonClick) {
		this.root = root;
		this.root.innerHTML = `
		<div class="scoreboard">
			<div class="scoreboard__name scoreboard__name--one">${"Japan"}</div>
			<div class="scoreboard__name scoreboard__name--two">${"South Korea"}</div>
			<div class="scoreboard__score" data-for-player="Japan">0</div>
			<div class="scoreboard__score" data-for-player="South Korea">0</div>
			<div class="scoreboard__controls" data-for-player="Japan">
				<button class="scoreboard__control-button">-</button>
				<button class="scoreboard__control-button">+</button>
			</div>
			<div class="scoreboard__controls" data-for-player="South Korea">
				<button class="scoreboard__control-button">-</button>
				<button class="scoreboard__control-button">+</button>
			</div>
		</div>
	`;
	this.root.querySelectorAll(".scoreboard__control-button").forEach(controlButton => {
		controlButton.addEventListener("click", () => {
			const direction = controlButton.textContent === "-" ? "minus" : "plus";
			const player = controlButton.closest(".scoreboard__controls").dataset.forPlayer;
			onControlButtonClick(player, direction);
		});
	});
	}
	update(playerOneScore, playerTwoScore) {
		this.root.querySelector(".scoreboard__score[data-for-player='Japan']").textContent = playerOneScore;
		this.root.querySelector(".scoreboard__score[data-for-player='South Korea']").textContent = playerTwoScore;
	}
}