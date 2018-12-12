import * as Eth from 'web3-eth';
import { Address } from '@melonproject/token-math/address';
import { UnsignedRawTransaction } from '~/utils/solidity/transactionFactory';
import { ExchangeConfigs } from '~/contracts/factory/transactions/createComponents';
import { TokenInterface } from '@melonproject/token-math/token';
import { MelonContracts } from '../deploy/deploySystem';
import { ThirdpartyContracts } from '../deploy/deployThirdparty';

export type SignFunction = (
  unsignedTransaction: UnsignedRawTransaction,
  from?: Address,
) => Promise<string>;

export enum Tracks {
  DEFAULT = 'default',
}

// Subset of NPM logging levels without numbers
export enum LogLevels {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
}

export type LoggerFunction = (...messages: any) => void;

export type LoggerFunctionWithLevel = {
  (level: LogLevels): LoggerFunction;
  (level: LogLevels, message: void, ...messages: any): void;
};

export type CurriedLogger = {
  (namespace: string, level: LogLevels, message: any, ...messages: any): void;
  (namespace: string, level: LogLevels): LoggerFunction;
  (namespace: string): LoggerFunctionWithLevel;
};

export interface Wallet {
  // TODO: Rename this to currentAccount
  address: Address;
  sign?: SignFunction;
}

export interface Options {
  readonly gasLimit: string;
  readonly gasPrice: string;
}

export interface Deployment {
  exchangeConfigs: ExchangeConfigs;
  melonContracts: MelonContracts;
  thirdpartyContracts: ThirdpartyContracts;
}

export interface Environment {
  readonly confirmer?: Function;
  readonly eth: Eth;
  readonly track: Tracks;
  readonly wallet?: Wallet;
  readonly options: Options;
  readonly logger: CurriedLogger;
  readonly deployment?: Deployment;
}
