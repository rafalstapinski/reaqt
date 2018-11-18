// graphql typescript definitions

export namespace GQL {
interface GraphQLResponseRoot {
  data?: Query
  errors?: Array<GraphQLResponseError>
}

interface GraphQLResponseError {
  /** Required for all errors */
  message: string
  locations?: Array<GraphQLResponseErrorLocation>
  /** 7.2.2 says 'GraphQL servers may provide additional entries to error' */
  [propName: string]: any
}

interface GraphQLResponseErrorLocation {
  line: number
  column: number
}

interface Query {
  __typename: 'Query'
  getDrinkers: Array<Drinker> | null
  getDrinker: Drinker | null
  getBars: Array<Bar> | null
  getBar: Bar | null
  getProducts: Array<Product> | null
  getProduct: Product | null
  /** Gets transactions at a bar by bar ID */
  getTransactionsAt: Array<Transaction> | null
  /** Gets transactions at a drinker by drinker ID */
  getTransactionsOf: Array<Transaction> | null
}

interface GetDrinkerOnQueryArguments {
  /** ID of the drinker */
  id: number
}

interface GetBarOnQueryArguments {
  /** ID of the bar */
  id: number
}

interface GetProductOnQueryArguments {
  /** ID of the product */
  id: number
}

interface GetTransactionsAtOnQueryArguments {
  /** ID of the bar */
  barId?: number | null
}

interface GetTransactionsOfOnQueryArguments {
  /** ID of the drinker */
  drinkerId?: number | null
}

/** Drinker object type */
interface Drinker {
  __typename: 'Drinker'
  /** ID of the drinker */
  _id: number
  /** Name of the drinker */
  name: string
  /** Address of the drinker */
  address: string
  /** City of the drinker */
  city: string
  /** State of the drinker */
  state: string
}

/** Bar object type */
interface Bar {
  __typename: 'Bar'
  /** ID of the bar */
  _id: number
  /** Name of the bar */
  name: string
  /** Address of the drinker */
  address: string
  /** City of the drinker */
  city: string
  /** State of the drinker */
  state: string
  /** Opening time as minutes after midnight */
  opens: number
  /** Closing time as minutes after midnight */
  closes: number
}

/** Product object type */
interface Product {
  __typename: 'Product'
  /** ID of the product */
  _id: number
  /** Name of the product */
  name: string
  /** Price of the product */
  price: number
  /** Boolean value is beer or not */
  isBeer: boolean
}

/** Transaction object type */
interface Transaction {
  __typename: 'Transaction'
  /** ID of the transaction */
  _id: number
  /** Transaction total */
  total: number
  /** Timestamp of the transaction */
  timestamp: string
  /** Drinker ID */
  drinkerId: number
  /** Bar ID */
  barId: number
  /** Drinker name */
  drinkerName: string
  /** Bar name */
  barName: string
}

export interface GetBarInput {
  id: number
}

export interface SelectionOnGetBar {
  _id: number
  name: string
  address: string
  city: string
  state: string
  opens: number
  closes: number
}

export interface GetBar {
  getBar: SelectionOnGetBar | null
}

export interface SelectionOnGetBars {
  _id: number
  name: string
  address: string
  city: string
  state: string
  opens: number
  closes: number
}

export interface GetBars {
  getBars: Array<SelectionOnGetBars | null> | null
}

export interface GetDrinkerInput {
  id: number
}

export interface SelectionOnGetDrinker {
  _id: number
  name: string
  address: string
  city: string
  state: string
}

export interface GetDrinker {
  getDrinker: SelectionOnGetDrinker | null
}

export interface SelectionOnGetDrinkers {
  _id: number
  name: string
  address: string
  city: string
  state: string
}

export interface GetDrinkers {
  getDrinkers: Array<SelectionOnGetDrinkers | null> | null
}

export interface GetProductInput {
  id: number
}

export interface SelectionOnGetProduct {
  _id: number
  name: string
  price: number
  isBeer: boolean
}

export interface GetProduct {
  getProduct: SelectionOnGetProduct | null
}

export interface SelectionOnGetProducts {
  _id: number
  name: string
  price: number
  isBeer: boolean
}

export interface GetProducts {
  getProducts: Array<SelectionOnGetProducts | null> | null
}

export interface GetTransactionsAtInput {
  barId: number
}

export interface SelectionOnGetTransactionsAt {
  _id: number
  total: number
  timestamp: string
  drinkerId: number
  drinkerName: string
}

export interface GetTransactionsAt {
  getTransactionsAt: Array<SelectionOnGetTransactionsAt | null> | null
}

export interface GetTransactionsOfInput {
  drinkerId: number
}

export interface SelectionOnGetTransactionsOf {
  _id: number
  total: number
  timestamp: string
  barId: number
  barName: string
}

export interface GetTransactionsOf {
  getTransactionsOf: Array<SelectionOnGetTransactionsOf | null> | null
}

}