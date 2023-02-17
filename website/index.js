let og = window.parent.og;

const linageeIcon = `<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<style type="text/css">	.st0{fill:#FFFFFF;}</style><path class="st0" d="m219.24 361.19c-0.188 0.343-0.501 1.061 0.054 2.023 0.612 1.06 1.502 1.06 1.837 1.06l35.18 3e-3 130.02-225.21c5.879-10.184 6.424-22.159 1.635-32.675-5.934-13.029-19.263-21.099-33.58-21.099h-118.45v0.035c-8.793 0.366-16.252 7.211-16.642 16.065-0.423 9.591 7.172 17.504 16.642 17.618v0.011h13.354l-146.6 253.92c-6.687 11.583-6.473 25.484 0.641 36.919 6.626 10.65 18.535 16.856 31.078 16.856h200.93c8.657 0 16.252-6.341 17.202-14.946 1.123-10.173-6.813-18.784-16.759-18.784h-202.05c-0.335 0-1.224 0-1.837-1.06-0.612-1.06-0.167-1.83 0-2.12l156.23-270.78h67.151c0.335 0 1.224 0 1.837 1.06 0.612 1.06 0.167 1.83 0 2.12l-137.88 238.99z"/></svg>`;

const derpAbi = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"txId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"BoughtFromVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"loanId","type":"uint256"},{"indexed":true,"internalType":"address","name":"debtor","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"IssueLoan","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"loanId","type":"uint256"},{"indexed":true,"internalType":"address","name":"debtor","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"LoanPaidInFull","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"txId","type":"uint256"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"SoldToVault","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_currentLoans","outputs":[{"internalType":"uint256","name":"loanId","type":"uint256"},{"internalType":"address","name":"debtor","type":"address"},{"internalType":"uint256","name":"total","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"interest","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_lastEndowment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_loanTerm","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_loanTermBlocks","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vStats","outputs":[{"internalType":"uint256","name":"loanId","type":"uint256"},{"internalType":"uint256","name":"txId","type":"uint256"},{"internalType":"uint256","name":"totalLoanPrinciple","type":"uint256"},{"internalType":"uint256","name":"totalLoanInterest","type":"uint256"},{"internalType":"uint256","name":"paidLoanPrinciple","type":"uint256"},{"internalType":"uint256","name":"paidLoanInterest","type":"uint256"},{"internalType":"uint256","name":"totalVaultSellVolume","type":"uint256"},{"internalType":"uint256","name":"totalVaultBuyVolume","type":"uint256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint8","name":"open","type":"uint8"}],"name":"openVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"destination","type":"address"}],"name":"endowment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"dHash","type":"bytes32"}],"name":"updateDataHash","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"lock","type":"uint8"}],"name":"lockdata","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getDataHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"newBaseURI","type":"string"}],"name":"updateBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUserSellPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUserBuyPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"takeLoan","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"payLoan","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"minPrice","type":"uint256"}],"name":"sellToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"buyToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mints","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reqTokenId","type":"uint256"}],"name":"getNftTraits","outputs":[{"internalType":"uint8[4]","name":"","type":"uint8[4]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"reqTokenId","type":"uint256"}],"name":"tokenData","outputs":[{"components":[{"internalType":"bytes32","name":"dataTxHash","type":"bytes32"},{"internalType":"uint8[4]","name":"traits","type":"uint8[4]"}],"internalType":"structDERPNATION.TokenData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string[15]","name":"textColor","type":"string[15]"},{"internalType":"string[15]","name":"backgroundColor","type":"string[15]"},{"internalType":"string[15]","name":"font","type":"string[15]"},{"internalType":"string[15]","name":"data","type":"string[15]"}],"name":"uploadData","outputs":[],"stateMutability":"nonpayable","type":"function"}];


let derpAddress = "0x06A07A3911dAb4507dD44cd97e30c3267d4a9c63";
let derpContract = new og.ethers.Contract(derpAddress, derpAbi, og.signer);


let newContent = false;

function getDerpImages(){

}

function updateUI(){
  if(newContent){
    
    newContent = false;
  }
  setTimeout(updateUI,1000);
}

$(document).on('click', '#mint_derp_button', async function(){
 try{
  const selected = $("#mint_count_select").find(":selected").text();
  const options = {value: og.ethers.utils.parseEther((0.025*parseInt(selected)).toString() )};
  console.log(options);

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

$(document).ready(function(){
  $("#connectWalletButton").click();
  //getAllEvents();
  updateUI();
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
