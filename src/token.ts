import { ethers } from 'ethers';

class Token {
  contract: ethers.Contract;
  address: string;
  abi: string;
  precision: number;
  constructor(
    network: string,
    address: string,
    abi: string,
    precision: number,
  ) {
    const defaultProvider = ethers.getDefaultProvider(network, {
      infura: {
        projectId: '813696e8eaf548dd9957496e364cfb44',
        projectSecret: 'ad12bbe4fb3046fbac0e7c259cbddfcf',
      },
    });
    this.contract = new ethers.Contract(address, abi, defaultProvider);
    this.address = address;
    this.abi = abi;
    this.precision = precision;
  }
  /**
   * Query token's balance
   * @param {string} address
   * @returns {string}
   */
  async queryBalance(address: string): Promise<string> {
    const balance = await this.contract.balanceOf(address);
    return ethers.utils.formatUnits(balance._hex, this.precision);
  }
}

export default Token;
