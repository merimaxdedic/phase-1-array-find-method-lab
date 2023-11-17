function superbowlWin(record) {
    const winGame = record.find(game => game.result === "W");
  
    if (winGame) {
      return winGame.year;
    } else {
      return undefined;
    }
  }
