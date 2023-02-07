let og = window.parent.og;

const linageeIcon = `<?xml version="1.0" encoding="UTF-8"?><svg enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
<style type="text/css">	.st0{fill:#FFFFFF;}</style><path class="st0" d="m219.24 361.19c-0.188 0.343-0.501 1.061 0.054 2.023 0.612 1.06 1.502 1.06 1.837 1.06l35.18 3e-3 130.02-225.21c5.879-10.184 6.424-22.159 1.635-32.675-5.934-13.029-19.263-21.099-33.58-21.099h-118.45v0.035c-8.793 0.366-16.252 7.211-16.642 16.065-0.423 9.591 7.172 17.504 16.642 17.618v0.011h13.354l-146.6 253.92c-6.687 11.583-6.473 25.484 0.641 36.919 6.626 10.65 18.535 16.856 31.078 16.856h200.93c8.657 0 16.252-6.341 17.202-14.946 1.123-10.173-6.813-18.784-16.759-18.784h-202.05c-0.335 0-1.224 0-1.837-1.06-0.612-1.06-0.167-1.83 0-2.12l156.23-270.78h67.151c0.335 0 1.224 0 1.837 1.06 0.612 1.06 0.167 1.83 0 2.12l-137.88 238.99z"/></svg>`;

const lnrSwapAbi = [{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"name","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"LNRListing","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"name","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"LNRListingRemove","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"name","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"LNRSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"addListing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"address","name":"_destination","type":"address"}],"name":"buyItem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"currentListings","outputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"lnrAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_name","type":"bytes32"}],"name":"removeListing","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_name","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"}],"name":"unstick","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"updateLNRAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const lnrAbi = [{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"name","outputs":[{"name":"o_name","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"owner","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"content","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"addr","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"reserve","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"subRegistrar","outputs":[{"name":"o_subRegistrar","type":"address"}],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_newOwner","type":"address"}],"name":"transfer","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_registrar","type":"address"}],"name":"setSubRegistrar","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"Registrar","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_a","type":"address"},{"name":"_primary","type":"bool"}],"name":"setAddress","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"},{"name":"_content","type":"bytes32"}],"name":"setContent","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"_name","type":"bytes32"}],"name":"disown","outputs":[],"type":"function"},{"constant":true,"inputs":[{"name":"_name","type":"bytes32"}],"name":"register","outputs":[{"name":"","type":"address"}],"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"}],"name":"Changed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"name","type":"bytes32"},{"indexed":true,"name":"addr","type":"address"}],"name":"PrimaryChanged","type":"event"}];

let lnrAddress = "0x5564886ca2C518d1964E5FCea4f423b41Db9F561";
let lnrContract = new og.ethers.Contract(lnrAddress, lnrAbi, og.signer);
let lnrSwapAddress = "0x071f7792202cDDf08d103BAE5885FF04F812D632";
let lnrSwapContract = new og.ethers.Contract(lnrSwapAddress, lnrSwapAbi, og.signer);

let allListings;
let allRemovedListings;
let allSales;
let allCurrentListings;
let totalListings = 0;
let listingsLeft = 0;
let newContent = false;


// get all events
// if there is an error and the
async function getSomeEvents(filter, blockStart, blockEnd){
  try{
    let results = await lnrSwapContract.queryFilter(filter, blockStart, blockEnd);
    let organized = new Map();
    for(let i=0; i<results.length; i++){
      organized.set(results[i].topics[1],results[i]);
    }
    return organized;
  }
  catch(e){
    // TOTO : ensure this catches the correct error, otherwise its just a ddos machine
    if(blockEnd-blockStart < 512)
      throw "STOP THE DDOS???";
    else{
      let half =  Math.ceil((blockEnd-blockStart) / 2);
      let resultsTop = await lnrSwapContract.queryFilter(filter, blockStart, blockStart+half);
      let resultsBottom = await lnrSwapContract.queryFilter(filter, blockEnd-half, blockEnd);
      return new Map([resultsBottom, resultsTop]);
    }
  }
}



async function updateListings(listings, removedListings, sales){
  listingsLeft = listings.size;
  allCurrentListings = {};
  return listings.forEach(async (value, key, map) => {
    // only add listings owned by the contract
    if(await lnrContract.owner(key) === lnrSwapAddress){
      allCurrentListings[key] = value;
      totalListings+=1;
    }
  listingsLeft-=1;
    setTimeout(function(){
      $("#content_homeLoading").html("All Listings: " + totalListings + "<br>Listings left: " + listingsLeft);
      if(listingsLeft == 0)
        newContent = true;
    },500);
  });

}

function updateSales(sales){
  allSales = {};
  sales.forEach((value, key, map) => {
    allSales[key] = value;
  });
}

async function getEvents(startBlock, currentBlock){
  try{
    const listingFilter = await lnrSwapContract.filters.LNRListing();
    const removeFilter = await lnrSwapContract.filters.LNRListingRemove();
    const saleFilter = await lnrSwapContract.filters.LNRSale();

    let listings = await getSomeEvents(listingFilter, startBlock, currentBlock);
    let removedListings = await getSomeEvents(removeFilter, startBlock, currentBlock);
    let sales = await getSomeEvents(saleFilter, startBlock, currentBlock);
    await updateListings(listings, removedListings, sales);
    updateSales(sales);
  }
  catch(e){
    console.log("Error getting all results?", e);
  }
}
async function getAllEvents(){
  const currentBlock = (await og.provider.getBlockNumber() );
  //getEvents(15654487,15659487)//currentBlock);
  getEvents(15654487,currentBlock);
}


async function update_activity(sales){
  let keys = Object.keys(sales);
  let activityString = `
  <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Domain</th>
          <th>Sale Price</th>
          <th>Block Number</th>
          <th>Tx Hash</th>
        </tr>
      </thead>
      <tbody>
  `;
  let count = 0;
  let volume = 0;
  for(let i=0; i< keys.length; i++){
    try{
      let name = og.lnr.bytes32ToDomain(keys[i]);
      let priceHex = sales[keys[i]].data;
      volume += parseFloat(og.ethers.utils.formatEther(priceHex));
      if(og.lnr.domainToBytes32(name) == keys[i]){
        activityString += `
        <tr>
        <td>${name}</td>
        <td>${og.ethers.utils.formatEther(priceHex)}e</td>
        <td>${sales[keys[i]].blockNumber}</td>
        <td>${sales[keys[i]].transactionHash}</td>
        </tr>
        `;
      }
      else
        throw "Not normalized: " + keys[i];
    }
    catch(e){
      console.log(e.message);
    }
  }
  console.log("Total Volume: " + volume);
  activityString += `</tbody></table>`;
  $("#content_activity").html(activityString);
}

function update_home(listings){
  let keys = Object.keys(listings);
  let homeString = `
  <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Domain</th>
          <th>Price</th>
          <th>Bytecode</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
  `;
  let count = 0;
  for(let i=0; i< keys.length; i++){
    try{
      let name = og.lnr.bytes32ToDomain(keys[i]);
      let priceHex = listings[keys[i]].data;

      if(og.lnr.domainToBytes32(name) == keys[i]){
        homeString += `
        <tr>
        <td>${name}</td>
        <td>${og.ethers.utils.formatEther(priceHex)}e</td>
        <td>${keys[i]}</td>
        <td><button class="button">Buy</button></td>
        </tr>
        `;
      }
      else
        throw "Not normalizable: " + keys[i];
    }
    catch(e){
      console.log(e.message);
    }
  }
  homeString += `</tbody></table>`;
  $("#content_home").html(homeString);
}

function updateUI(){
  if(newContent){
    update_home(allCurrentListings);
    update_activity(allSales);
    newContent = false;
  }
  setTimeout(updateUI,1000);
}



$(document).ready(function(){
  getAllEvents();
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
