const checkCashRegister = (price, cash, cid) => {

	// cash total in cents
	const cidTotal = cid.reduce((accumulator, nextVal) => {
		return accumulator + nextVal[1] / 0.01;
	}, 0);	

	console.log(`price: ${price}, cash: ${cash}, change due: ${cash - price}, cid total: ${cidTotal},`);
	console.log(`cid: ${cid}`);

	const denomValue = (str) => {
		//takes a denomination in the form of a string and return numerical value in cents
		switch (str) {
			case "ONE HUNDRED":
				return 10000;
				break;
			case "TWENTY":
				return 2000;
				break;
			case "TEN":
				return 1000;
				break;
			case "FIVE":
				return 500;
				break;
			case "ONE":
				return 100;
				break;
			case "QUARTER":
				return 25;
				break;
			case "DIME":
				return 10;
				break;
			case "NICKEL":
				return 5;
				break;
			case "PENNY":
				return 1;
				break;
			default :
				return undefined
				break;
		}
	}

	const returnChange = () => {
		let changeDue = cash/0.01 - price/0.01;

		let changeInHand = new Object();
		
		//go into each "tray" of our drawer and find the right size denomination
		//and if said denomination has enough in the tray
		cid.reverse().forEach((tray) => {

			// convert dollar value into cents
			tray[1] /= 0.01;
			
			// console.log(`${changeDue} / ${denomValue(tray[0])} >= 1 && ${tray[1]} > 0 :${changeDue / denomValue(tray[0]) >= 1 && tray[1] > 0}`)
			while ( changeDue / denomValue(tray[0]) >= 1 && tray[1] > 0 ) {

				//decrease the change due since it has been "given"
				changeDue -= denomValue(tray[0]);

				//decrease the amount of money in our drawer
				tray[1] -= denomValue(tray[0]);

				(tray[0] in changeInHand) ?
					changeInHand[tray[0]] += denomValue(tray[0]) :
					changeInHand[tray[0]] = denomValue(tray[0]);
			}
		});

		// convert the change to be given into an array
		let changeInHandArr = [];
		for (let denomination in changeInHand) {
			changeInHandArr.push([denomination, changeInHand[denomination] * 0.01]);
		}

		return (changeDue === 0 ) ? {status: "OPEN", change: [...changeInHandArr]} :
			{status: "INSUFFICIENT_FUNDS", change: []};
	}

	if (cash/0.01 - price/0.01 > cidTotal) {
		return {status: "INSUFFICIENT_FUNDS", change: []};
	} else if (cash/0.01 - price/0.01 == cidTotal){
		return {status: "CLOSED", change: [...cid]};
	} else if (cash/0.01 - price/0.01 < cidTotal) {
		return returnChange();
	}
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
