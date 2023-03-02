let og = window.parent.og;

const linageeIcon = `<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<style type="text/css">	.st0{fill:#FFFFFF;}</style><path class="st0" d="m219.24 361.19c-0.188 0.343-0.501 1.061 0.054 2.023 0.612 1.06 1.502 1.06 1.837 1.06l35.18 3e-3 130.02-225.21c5.879-10.184 6.424-22.159 1.635-32.675-5.934-13.029-19.263-21.099-33.58-21.099h-118.45v0.035c-8.793 0.366-16.252 7.211-16.642 16.065-0.423 9.591 7.172 17.504 16.642 17.618v0.011h13.354l-146.6 253.92c-6.687 11.583-6.473 25.484 0.641 36.919 6.626 10.65 18.535 16.856 31.078 16.856h200.93c8.657 0 16.252-6.341 17.202-14.946 1.123-10.173-6.813-18.784-16.759-18.784h-202.05c-0.335 0-1.224 0-1.837-1.06-0.612-1.06-0.167-1.83 0-2.12l156.23-270.78h67.151c0.335 0 1.224 0 1.837 1.06 0.612 1.06 0.167 1.83 0 2.12l-137.88 238.99z"/></svg>`;

const derpAbi = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"txId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"BoughtFromVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"loanId","type":"uint256"},{"indexed":true,"internalType":"address","name":"debtor","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"IssueLoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"loanId","type":"uint256"},{"indexed":true,"internalType":"address","name":"debtor","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"LoanPaidInFull","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"txId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"SoldToVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_currentLoans","outputs":[{"internalType":"uint256","name":"loanId","type":"uint256"},{"internalType":"address","name":"debtor","type":"address"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lastEndowment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_loanTerm","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_loanTermBlocks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vStats","outputs":[{"internalType":"uint256","name":"loanId","type":"uint256"},{"internalType":"uint256","name":"txId","type":"uint256"},{"internalType":"uint256","name":"totalLoanPrinciple","type":"uint256"},{"internalType":"uint256","name":"totalLoanInterest","type":"uint256"},{"internalType":"uint256","name":"paidLoanPrinciple","type":"uint256"},{"internalType":"uint256","name":"paidLoanInterest","type":"uint256"},{"internalType":"uint256","name":"totalVaultSellVolume","type":"uint256"},{"internalType":"uint256","name":"totalVaultBuyVolume","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint8","name":"open","type":"uint8"}],"name":"openVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"destination","type":"address"}],"name":"endowment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"dHash","type":"bytes32"}],"name":"updateDataHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"lock","type":"uint8"}],"name":"lockdata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getDataHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newBaseURI","type":"string"}],"name":"updateBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUserSellPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserBuyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"takeLoan","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"payLoan","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"minPrice","type":"uint256"}],"name":"sellToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"buyToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mints","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reqTokenId","type":"uint256"}],"name":"getNftTraits","outputs":[{"internalType":"uint8[4]","name":"","type":"uint8[4]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reqTokenId","type":"uint256"}],"name":"tokenData","outputs":[{"components":[{"internalType":"bytes32","name":"dataTxHash","type":"bytes32"},{"internalType":"uint8[4]","name":"traits","type":"uint8[4]"}],"internalType":"structDERPNATION.TokenData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string[15]","name":"textColor","type":"string[15]"},{"internalType":"string[15]","name":"backgroundColor","type":"string[15]"},{"internalType":"string[15]","name":"font","type":"string[15]"},{"internalType":"string[15]","name":"data","type":"string[15]"}],"name":"uploadData","outputs":[],"stateMutability":"nonpayable","type":"function"}];


let derpAddress = "0x06A07A3911dAb4507dD44cd97e30c3267d4a9c63";
let derpContract = new og.ethers.Contract(derpAddress, derpAbi, og.signer);


let newContent = true;
let derpImages;

async function updateRandomDerp(){
  $("#random_derp").html(await getDerpSVG(0));
  setTimeout(updateRandomDerp, 1000);
}

async function getDerpSVG(tokenId){
  let traits;
  if(tokenId > 0)
    traits = await derpContract.getNftTraits(tokenId);
  else
    traits = [Math.floor(Math.random() * 15),Math.floor(Math.random() * 15),Math.floor(Math.random() * 15),Math.floor(Math.random() * 15)];

  return `
  <svg viewBox="0 0 128 128" width="96">
  <image x="0" y="0" width="128" height="128" xlink:href="data:image/png;base64, ${derpImages[0][traits[0]]}" />
  <image x="0" y="0" width="128" height="128" xlink:href="data:image/png;base64, ${derpImages[1][traits[1]]}" />
  <image x="0" y="0" width="128" height="128" xlink:href="data:image/png;base64, ${derpImages[2][traits[2]]}" />
  <image x="0" y="0" width="128" height="128" xlink:href="data:image/png;base64, ${derpImages[3][traits[3]]}" />
  </svg>
  `;
}

async function getDerpImages(){
  const nftDataHash = "0x29e0da9b50de6bb95f1f74f455e5ee4e7157ecba1094281133e7bd4e1d65be1d";
  try{
    let tx = await og.provider.getTransaction(nftDataHash);
    let input_data = '0x' + tx.data.slice(10);
    let iface = new og.ethers.utils.Interface(derpAbi);
    let decodedData = iface.parseTransaction({ data: tx.data, value: tx.value });
    let params = decodedData.args;
    derpImages = params;
  }
  catch(e){
    throw "Error loading images!";
  }

}

async function getSomeEvents(contract, filter, blockStart, blockEnd){
  try{
    let results = await contract.queryFilter(filter, blockStart, blockEnd);
    let organized = new Map();
    for(let i=0; i<results.length; i++){
      //console.log(results[i]);
      const tokenId = parseInt(results[i].args["tokenId"].toString());
      organized.set(tokenId,results[i]);
    }
    return organized;
  }
  catch(e){
    // TOTO : ensure this catches the correct error, otherwise its just a ddos machine
    if(blockEnd-blockStart < 512)
      throw "STOP THE DDOS???";
    else{
      let half =  Math.ceil((blockEnd-blockStart) / 2);
      let resultsTop = await contract.queryFilter(filter, blockStart, blockStart+half);
      let resultsBottom = await contract.queryFilter(filter, blockEnd-half, blockEnd);
      return new Map([resultsBottom, resultsTop]);
    }
  }
}

let vaultState = {currentBlock: 0};

function getBlockAndLog(tx){
  return tx.blockNumber*1000000+tx.logIndex
}

function updateVaultState(stateName, value,key,map){
  let currentBlockAndLog = getBlockAndLog(value);
  if(vaultState.allTokens[key] == undefined || currentBlockAndLog > vaultState.allTokens[key].blkAndLog || stateName==="MintToVault"){
    newContent = true;
    let dataObj = {
      transactionHash: value.transactionHash,
      args: value.args
    }
    vaultState.allTokens[key] = {"state":stateName, "blkAndLog": currentBlockAndLog, data: dataObj};
  }
}

// call getEvents to get the current state, then call it to update the state
async function getEvents(startBlock, currentBlock){
  try{
    vaultState.allTokens = {};
    const transferFilter = await derpContract.filters.Transfer();
    const mintToVaultFilter = await derpContract.filters.Transfer(null, derpAddress);
    const soldToVaultFilter = await derpContract.filters.SoldToVault();
    const boughtFromVaultFilter = await derpContract.filters.BoughtFromVault();
    const issueLoanFilter = await derpContract.filters.IssueLoan();
    const loanPaidFilter = await derpContract.filters.LoanPaidInFull();

    let transfers = await getSomeEvents(derpContract, transferFilter, startBlock, currentBlock);
    let mintToVault = await getSomeEvents(derpContract, mintToVaultFilter, startBlock, currentBlock);
    let soldToVault = await getSomeEvents(derpContract, soldToVaultFilter, startBlock, currentBlock);
    let boughtFromVault = await getSomeEvents(derpContract, boughtFromVaultFilter, startBlock, currentBlock);
    let issuedLoans = await getSomeEvents(derpContract, issueLoanFilter, startBlock, currentBlock);
    let paidLoans = await getSomeEvents(derpContract, loanPaidFilter, startBlock, currentBlock);

    // go over all transfers to the vault and mark the state as toVault if its newer than current blockAndLog
    // this should get all the latest transfers in
    // then go through each buy from the vault, issued loan and paid load
    // this should have the current vault NFT state
    transfers.forEach(function(value,key,map){
      updateVaultState("Transfer", value, key, map)
    });
    
    mintToVault.forEach(function(value,key,map){
      updateVaultState("MintToVault", value, key, map)
    });

    soldToVault.forEach(function(value,key,map){
      updateVaultState("SoldToVault", value, key, map)
    });

    boughtFromVault.forEach(function(value,key,map){
      updateVaultState("BoughtFromVault", value, key, map)
    });

    issuedLoans.forEach(function(value,key,map){
      updateVaultState("IssueLoan", value, key, map)
    });
    
    paidLoans.forEach(function(value,key,map){
      updateVaultState("LoanPaidInFull", value, key, map)
    });
    vaultState.currentBlock = currentBlock;
    
  }
  catch(e){
    console.log("Error getting all results?", e);
  }
}

function timeConversion(sec) {
  var seconds = (sec).toFixed(1);
  var minutes = (sec / (60)).toFixed(1);
  var hours = (sec / (60 * 60)).toFixed(1);
  var days = (sec / (60 * 60 * 24)).toFixed(1);
  if (seconds < 60) {
      return seconds + " Sec";
  } else if (minutes < 60) {
      return minutes + " Min";
  } else if (hours < 24) {
      return hours + " Hrs";
  } else {
      return days + " Days"
  }
}

// goes through the vault state and determiness vault tokens, user tokens, user loans and all loans
async function updateUserData(){
  var walletAddress = await og.signer.getAddress();
  vaultState.userTokens = {};
  vaultState.vaultTokens = {};
  vaultState.userLoans = {};
  vaultState.allLoans = {};

  for (const [tokenId, tokenData] of Object.entries(vaultState.allTokens)) {
    switch(tokenData.state){
      case "MintToVault": 
      case "SoldToVault": vaultState.vaultTokens[tokenId] = tokenData;
                          break;

      case "BoughtFromVault":      
      case "LoanPaidInFull":          
      case "Transfer":  if(walletAddress === tokenData.data.args.to || walletAddress === tokenData.data.args.user || walletAddress === tokenData.data.args.debtor)
                          vaultState.userTokens[tokenId] = tokenData;
                        break;
      
       case "IssueLoan": if(walletAddress === tokenData.data.args.debtor)
                            vaultState.userLoans[tokenId] = tokenData;  
                          else
                            vaultState.allLoans[tokenId] = tokenData;
                          break;
    }
  }

  let tempKeys = Object.keys(vaultState.vaultTokens);
  $("#vault_user_buy_list").text("");
  for(let i=0; i<tempKeys.length; i++){
    $("#vault_user_buy_list").append(`
      <div class="card" style="display:inline-block;padding:0.2rem;>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                ${await getDerpSVG(tempKeys[i])}
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">#${tempKeys[i]}</p>
              <p class="subtitle is-5"><div class="buy_from_vault_button button is-pulled-right" value="${tempKeys[i]}">Buy</div></p>
            </div>
          </div>
        </div>
      </div>
    `);
  }

  $("#loan_outstanding_loan_list").text("");
  
  let tableText = `
    <table class="table">
      <thead>
        <tr>
          <th>NFT Id</th>
          <th>Debtor</th>
          <th>Image</th>
          <th>Balance</th>
          <th>Loan due</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
  `;

  let currentBlock = (await og.provider.getBlockNumber() );
  tempKeys = Object.keys(vaultState.userLoans);
  for(let i=0; i<tempKeys.length; i++){
    try{
    let loanValueBN = vaultState.userLoans[tempKeys[i]].data.args.value;
    let loanBlockNumber = parseInt(vaultState.userLoans[tempKeys[i]].blkAndLog/1000000);
    let loanValue = vaultState.userLoans[tempKeys[i]].data.args.value.toHexString();
    let loanEnds = loanBlockNumber + (44500*24);
    tableText += `
      <tr>
        <td>#${tempKeys[i]}</td>
        <td>You</td>
        <td>
          <svg viewBox="0 0 96 96" width="48">
            ${await getDerpSVG(tempKeys[i])}
          </svg>
        </td>
        <td>${og.ethers.utils.formatEther(loanValueBN)}eth</td>
        <td>${ timeConversion((loanEnds-currentBlock)*14)} </td>
        <td><button class="button pay_loan_button" value="${tempKeys[i]}" loanvalue="${loanValue}">Pay Loan</button></td>
      </tr>
    `;
    }
    catch(e){
      console.log(e);
    }
  }
  tempKeys = Object.keys(vaultState.allLoans);
  for(let i=0; i<tempKeys.length; i++){
    try{
      let loanValueBN = vaultState.allLoans[tempKeys[i]].data.args.value;
      let loanBlockNumber = parseInt(vaultState.allLoans[tempKeys[i]].blkAndLog/1000000);
      let loanValue = vaultState.allLoans[tempKeys[i]].data.args.value.toHexString();
      let loanEnds = loanBlockNumber + (44500*24);
      
      let buttonText = `<button class="button pay_loan_button" value="${tempKeys[i]}" loanvalue="${loanValue}">Pay Loan</button>`;
      tableText += `
        <tr>
          <td>#${tempKeys[i]}</td>
          <td>Not You</td>
          <td>
            <svg viewBox="0 0 96 96" width="48">
              ${await getDerpSVG(tempKeys[i])}
            </svg>
          </td>
          <td>${og.ethers.utils.formatEther(loanValueBN)}eth</td>
          <td>${ timeConversion((loanEnds-currentBlock)*14)} </td>
          <td>${loanEnds <= currentBlock ? buttonText : ""}</td>
        </tr>
      `;
    }
    catch(e){
      console.log(e);
    }
  }
  tableText +="</tbody></table>";

  $("#loan_outstanding_loan_list").append(tableText);
  

  tempKeys = Object.keys(vaultState.userTokens);
  $("#loan_user_loan_list").text("");
  $("#vault_user_sell_list").text("");
  for(let i=0; i<tempKeys.length; i++){
    $("#loan_user_loan_list").append(`
    <div class="card" style="display:inline-block;padding:0.2rem;>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-96x96">
              ${await getDerpSVG(tempKeys[i])}
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-5">#${tempKeys[i]}</p>
            <p class="subtitle is-5"><div class="take_loan_button button is-pulled-right" value="${tempKeys[i]}">Take Loan</div></p>
          </div>
        </div>
      </div>
    </div>
  `);

    $("#vault_user_sell_list").append(`
      <div class="card" style="display:inline-block;padding:0.2rem;>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-96x96">
                ${await getDerpSVG(tempKeys[i])}
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-5">#${tempKeys[i]}</p>
              <p class="subtitle is-5"><div class="sell_to_vault_button button is-pulled-right" value="${tempKeys[i]}">Sell</div></p>
            </div>
          </div>
        </div>
      </div>
  `);
  }

  //Update the vault info
  vaultState.mintCount = (await derpContract.totalSupply()).toNumber();
  vaultState.balance = parseFloat(og.ethers.utils.formatEther((await og.provider.getBalance(derpAddress))));
  vaultState.buyPrice = 1.01*parseFloat(og.ethers.utils.formatEther((await derpContract.getUserBuyPrice())));
  vaultState.sellPrice = 0.99*parseFloat(og.ethers.utils.formatEther((await derpContract.getUserSellPrice())));
  $("#vault_balance").text(vaultState.balance);
  $("#loan_principle").text(vaultState.sellPrice/4);
  $("#mint_derp_counter").text("" + vaultState.mintCount);
  $("#vault_user_buy_price").text("Buy From Vault: " + vaultState.buyPrice +" ETH");
  $("#vault_user_sell_price").text("Sell To Vault: " + vaultState.sellPrice +" ETH");
  console.log(vaultState);
}

async function updateUI(){
  if(newContent){
    await updateUserData();
    newContent = false;
  }
  setTimeout(updateUI,500);
}










$(document).on('click', '.pay_loan_button', async function(){
  try{
    let tokenId = $(this).attr("value");
    let loanValue = og.ethers.BigNumber.from($(this).attr("loanvalue"));
    const options = {value: loanValue};
    const submittedTx = await derpContract.payLoan(tokenId,options);
    const txReceipt = await submittedTx.wait();
      if (txReceipt.status === 0)
          throw new Error("Approve transaction failed");
      else{
        $("#modal_title").html("Congratulations");
        $("#modal_text").html("Your loan for Derp Nation #" + tokenId + " has been paid");
        $("#modal_button").click();
      }
   }
   catch(e){
    $("#modal_title").html("Error - Pay Loan Failed");
    $("#modal_text").text(e.message);
    $("#modal_button").click();
  }
});


$(document).on('click', '.sell_to_vault_button', async function(){
  try{
    let tokenId = $(this).attr("value");

    const submittedTx = await derpContract.sellToken(tokenId, og.ethers.utils.parseEther(""+vaultState.sellPrice));
    const txReceipt = await submittedTx.wait();
      if (txReceipt.status === 0)
          throw new Error("Approve transaction failed");
      else{
        $("#modal_title").html("Congratulations");
        $("#modal_text").html("Derp Nation #" + tokenId + " has been sold");
        $("#modal_button").click();
      }
   }
   catch(e){
    $("#modal_title").html("Error - Sell Failed");
    $("#modal_text").text(e.message);
    $("#modal_button").click();
  }
});

$(document).on('click', '.take_loan_button', async function(){
  try{
    let tokenId = $(this).attr("value");

    const submittedTx = await derpContract.takeLoan(tokenId);
    const txReceipt = await submittedTx.wait();
      if (txReceipt.status === 0)
          throw new Error("Approve transaction failed");
      else{
        $("#modal_title").html("Congratulations");
        $("#modal_text").html("You took out a loan against Derp Nation #" + tokenId);
        $("#modal_button").click();
      }
   }
   catch(e){
    $("#modal_title").html("Error - Take Loan Failed");
    $("#modal_text").text(e.message);
    $("#modal_button").click();
  }
});


$(document).on('click', '.buy_from_vault_button', async function(){
  try{
    let tokenId = $(this).attr("value");
    const options = {value: og.ethers.utils.parseEther(""+vaultState.buyPrice)};

    const submittedTx = await derpContract.buyToken(tokenId, options);
    const txReceipt = await submittedTx.wait();
      if (txReceipt.status === 0)
          throw new Error("Approve transaction failed");
      else{
        $("#modal_title").html("Congratulations");
        $("#modal_text").html("Derp Nation #" + tokenId + " is now yours");
        $("#modal_button").click();
      }
   }
   catch(e){
    $("#modal_title").html("Error - Buy Failed");
    $("#modal_text").text(e.message);
    $("#modal_button").click();
  }
});


$(document).on('click', '#mint_derp_button', async function(){
  try{
    const selected = $("#mint_count_select").find(":selected").text();
    const cost = ["0", "0.025", "0.05", "0.075", "0.1", "0.125"]
    const options = {value: og.ethers.utils.parseEther(cost[parseInt(selected)] )};
    console.log(cost[parseInt(selected)]);

    const submittedTx = await derpContract.mint(selected, options);
    const txReceipt = await submittedTx.wait();
      if (txReceipt.status === 0)
          throw new Error("Approve transaction failed");
  }
  catch(e){
    $("#modal_title").html("Error - Mint Failed");
    $("#modal_text").text(e.message);
    $("#modal_button").click();
  }
});

$(document).ready(async function(){
  $("#connectWalletButton").click();
  await getDerpImages();
  await updateRandomDerp();
  //getAllEvents();
  const currentBlock = (await og.provider.getBlockNumber() );
  await getEvents(14363280, currentBlock);
  updateUI();
 
  derpContract.on("Transfer", (...args)  => {
    const event = args[args.length - 1];
    updateVaultState("Transfer", event, parseInt(event.args["tokenId"].toString()));
  });
  derpContract.on("SoldToVault", (...args)  => {
    const event = args[args.length - 1];
    updateVaultState("SoldToVault", event, parseInt(event.args["tokenId"].toString()));
  });
  derpContract.on("BoughtFromVault", (...args)  => {
    const event = args[args.length - 1];
    updateVaultState("BoughtFromVault", event, parseInt(event.args["tokenId"].toString()));
  });
  derpContract.on("IssueLoan", (...args)  => {
    const event = args[args.length - 1];
    updateVaultState("IssueLoan", event, parseInt(event.args["tokenId"].toString()));
  });
  derpContract.on("LoanPaidInFull", (...args)  => {
    const event = args[args.length - 1];
    updateVaultState("LoanPaidInFull", event, parseInt(event.args["tokenId"].toString()));
  });
});

$(document).on('click', '.menu-item', async function(){
  let tmpData = $(this).attr("data");
  $(".main_content").addClass("is-hidden");
  $("#"+tmpData).removeClass("is-hidden");
});

$(document).on('click', '#connectWalletButton', async function(){
  try{
    var walletAddress = await og.signer.getAddress();
    let primaryName = await og.lnr.lookupAddress(walletAddress);
    if(primaryName)
      $(this).html('<div class="linageeGradient" style="width:22px; height:22px; margin:auto;">'+ linageeIcon + "</div>&nbsp;" + primaryName)
    else
      $(this).html(walletAddress.substring(0,6) + "..." + walletAddress.slice(walletAddress.length-4));
  }
  catch(e){
    $("#modal_title").html("!ooh");
    $("#modal_subtitle").html("Something went terribly wrong");
    $("#modal_text").text(e.message);
    $("#modal_button").click();
  }
});
