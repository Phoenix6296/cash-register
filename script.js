const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");

const checkButton = document.querySelector("#submit");
checkButton.addEventListener("click", () => {
    if (billAmount.value > 0 && cashGiven.value > 0 && cashGiven.value >= billAmount.value) {
        const change = cashGiven.value - billAmount.value;
        const noOf2000Notes = Math.floor(change / 2000);
        const noOf500Notes = Math.floor((change - noOf2000Notes * 2000) / 500);
        const noOf200Notes = Math.floor((change - noOf2000Notes * 2000 - noOf500Notes * 500) / 200);
        const noOf100Notes = Math.floor((change - noOf2000Notes * 2000 - noOf500Notes * 500 - noOf200Notes * 200) / 100);
        const noOf50Notes = Math.floor((change - noOf2000Notes * 2000 - noOf500Notes * 500 - noOf200Notes * 200 - noOf100Notes * 100) / 50);
        const noOf20Notes = Math.floor((change - noOf2000Notes * 2000 - noOf500Notes * 500 - noOf200Notes * 200 - noOf100Notes * 100 - noOf50Notes * 50) / 20);
        const noOf10Notes = Math.floor((change - noOf2000Notes * 2000 - noOf500Notes * 500 - noOf200Notes * 200 - noOf100Notes * 100 - noOf50Notes * 50 - noOf20Notes * 20) / 10);
        const noOf5Notes = Math.floor((change - noOf2000Notes * 2000 - noOf500Notes * 500 - noOf200Notes * 200 - noOf100Notes * 100 - noOf50Notes * 50 - noOf20Notes * 20 - noOf10Notes * 10) / 5);
        const noOf2Notes = Math.floor((change - noOf2000Notes * 2000 - noOf500Notes * 500 - noOf200Notes * 200 - noOf100Notes * 100 - noOf50Notes * 50 - noOf20Notes * 20 - noOf10Notes * 10 - noOf5Notes * 5) / 2);
        const noOf1Notes = Math.floor(change - noOf2000Notes * 2000 - noOf500Notes * 500 - noOf200Notes * 200 - noOf100Notes * 100 - noOf50Notes * 50 - noOf20Notes * 20 - noOf10Notes * 10 - noOf5Notes * 5 - noOf2Notes * 2);

        const changes = [noOf2000Notes, noOf500Notes, noOf200Notes, noOf100Notes, noOf50Notes, noOf20Notes, noOf10Notes, noOf5Notes, noOf2Notes, noOf1Notes]
        // console.log(change);
        // console.table({
        //     "2000": noOf2000Notes,
        //     "500": noOf500Notes,
        //     "200": noOf200Notes,
        //     "100": noOf100Notes,
        //     "50": noOf50Notes,
        //     "20": noOf20Notes,
        //     "10": noOf10Notes,
        //     "5": noOf5Notes,
        //     "2": noOf2Notes,
        //     "1": noOf1Notes
        // });

        const notes = document.querySelectorAll("#change-table>tbody")[0].firstElementChild;
        console.log(notes);
        for (let i = 0; i < changes.length; i++) {
            if (changes[i] > 0) {
                notes.children[i + 1].innerHTML = changes[i];
                notes.children[i + 1].style.backgroundColor = "green";
                notes.children[i + 1].style.color = "white";
            }
        }
    }
    else
        console.error("Invalid Input");


});
