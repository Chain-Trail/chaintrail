import { ethers } from "ethers";

const Web3Login = async () => {
  let signer = null;

  let provider;
  if (window.ethereum == null) {
    console.log("MetaMask not installed; using read-only defaults");
    provider = ethers.getDefaultProvider();
  } else {
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
  }
  return <div></div>;
};
export default Web3Login;
