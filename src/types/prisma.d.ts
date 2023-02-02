
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Example
 * 
 */
export type Example = {
  id: string
}

/**
 * Model MobileUser
 * 
 */
export type MobileUser = {
  id: string
  name: string
  surname: string | null
  email: string
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
  lastLogin: Date
  legajoUCA: string | null
  birthDate: Date | null
  sex: string | null
  phone: string | null
  isDriver: boolean
  completedSurvey: boolean
  createdAt: Date | null
  updatedAt: Date | null
}

/**
 * Model Account
 * 
 */
export type Account = {
  id: string
  userId: string
  type: string
  provider: string
  providerAccountId: string
  refresh_token: string | null
  access_token: string | null
  expires_at: number | null
  token_type: string | null
  scope: string | null
  id_token: string | null
  session_state: string | null
  ext_expires_in: number | null
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sessionToken: string
  userId: string
  expires: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: string
  name: string | null
  email: string | null
  emailVerified: Date | null
  image: string | null
}

/**
 * Model Vehicle
 * 
 */
export type Vehicle = {
  id: string
  modelId: number
  licensePlate: string
  driverId: string
  maxPassengers: number
  createAt: Date
  updateAt: Date
}

/**
 * Model VehicleMake
 * 
 */
export type VehicleMake = {
  id: number
  make: string
}

/**
 * Model VehicleType
 * 
 */
export type VehicleType = {
  id: number
  type: string
}

/**
 * Model VehicleModel
 * 
 */
export type VehicleModel = {
  id: number
  model: string
  makeId: number
  typeId: number
}

/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = {
  identifier: string
  token: string
  expires: Date
}

/**
 * Model Milestone
 * 
 */
export type Milestone = {
  id: number
  friendlyName: string
  coordinatesId: number | null
}

/**
 * Model Coordinates
 * 
 */
export type Coordinates = {
  id: number
  lat: number
  lng: number
  timestamp: Date
}

/**
 * Model Adress
 * 
 */
export type Adress = {
  id: string
  name: string
  coordinatesId: number
}

/**
 * Model SeatAssignement
 * 
 */
export type SeatAssignement = {
  id: string
  pickupAdressId: string
  dropoffAdressId: string
  status: string
  qrCode: string
  userRating: number | null
  message: string | null
  tripId: string
  passengerId: string
  pickupType: string | null
  dropoffType: string | null
}

/**
 * Model Trip
 * 
 */
export type Trip = {
  id: string
  driverId: string
  status: string
  price: number
  rating: number | null
  message: string | null
  startAddressId: string
  endAddressId: string
  maxPassengers: number
  estimatedStartTime: Date
  estimatedArrivalTime: Date
  actualDepartureTime: Date | null
  actualArrivalTime: Date | null
  actualDistance: number | null
  vehicleId: string
  description: string | null
}

/**
 * Model AOI
 * 
 */
export type AOI = {
  id: string
  name: string
}

/**
 * Model RealtimeTripData
 * 
 */
export type RealtimeTripData = {
  id: string
  tripId: string
  timestamp: Date
  seats: number
  provider: string
  mocked: boolean
  coordinatesId: number
}

/**
 * Model RealtimeCoordinates
 * 
 */
export type RealtimeCoordinates = {
  id: number
  accuracy: number
  altitude: number
  altitudeAccuracy: number
  heading: number
  latitude: number
  longitude: number
  speed: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Examples
 * const examples = await prisma.example.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Examples
   * const examples = await prisma.example.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.example`: Exposes CRUD operations for the **Example** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Examples
    * const examples = await prisma.example.findMany()
    * ```
    */
  get example(): Prisma.ExampleDelegate<GlobalReject>;

  /**
   * `prisma.mobileUser`: Exposes CRUD operations for the **MobileUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MobileUsers
    * const mobileUsers = await prisma.mobileUser.findMany()
    * ```
    */
  get mobileUser(): Prisma.MobileUserDelegate<GlobalReject>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<GlobalReject>;

  /**
   * `prisma.vehicleMake`: Exposes CRUD operations for the **VehicleMake** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleMakes
    * const vehicleMakes = await prisma.vehicleMake.findMany()
    * ```
    */
  get vehicleMake(): Prisma.VehicleMakeDelegate<GlobalReject>;

  /**
   * `prisma.vehicleType`: Exposes CRUD operations for the **VehicleType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleTypes
    * const vehicleTypes = await prisma.vehicleType.findMany()
    * ```
    */
  get vehicleType(): Prisma.VehicleTypeDelegate<GlobalReject>;

  /**
   * `prisma.vehicleModel`: Exposes CRUD operations for the **VehicleModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VehicleModels
    * const vehicleModels = await prisma.vehicleModel.findMany()
    * ```
    */
  get vehicleModel(): Prisma.VehicleModelDelegate<GlobalReject>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<GlobalReject>;

  /**
   * `prisma.milestone`: Exposes CRUD operations for the **Milestone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Milestones
    * const milestones = await prisma.milestone.findMany()
    * ```
    */
  get milestone(): Prisma.MilestoneDelegate<GlobalReject>;

  /**
   * `prisma.coordinates`: Exposes CRUD operations for the **Coordinates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coordinates
    * const coordinates = await prisma.coordinates.findMany()
    * ```
    */
  get coordinates(): Prisma.CoordinatesDelegate<GlobalReject>;

  /**
   * `prisma.adress`: Exposes CRUD operations for the **Adress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Adresses
    * const adresses = await prisma.adress.findMany()
    * ```
    */
  get adress(): Prisma.AdressDelegate<GlobalReject>;

  /**
   * `prisma.seatAssignement`: Exposes CRUD operations for the **SeatAssignement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SeatAssignements
    * const seatAssignements = await prisma.seatAssignement.findMany()
    * ```
    */
  get seatAssignement(): Prisma.SeatAssignementDelegate<GlobalReject>;

  /**
   * `prisma.trip`: Exposes CRUD operations for the **Trip** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trips
    * const trips = await prisma.trip.findMany()
    * ```
    */
  get trip(): Prisma.TripDelegate<GlobalReject>;

  /**
   * `prisma.aOI`: Exposes CRUD operations for the **AOI** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AOIS
    * const aOIS = await prisma.aOI.findMany()
    * ```
    */
  get aOI(): Prisma.AOIDelegate<GlobalReject>;

  /**
   * `prisma.realtimeTripData`: Exposes CRUD operations for the **RealtimeTripData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealtimeTripData
    * const realtimeTripData = await prisma.realtimeTripData.findMany()
    * ```
    */
  get realtimeTripData(): Prisma.RealtimeTripDataDelegate<GlobalReject>;

  /**
   * `prisma.realtimeCoordinates`: Exposes CRUD operations for the **RealtimeCoordinates** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RealtimeCoordinates
    * const realtimeCoordinates = await prisma.realtimeCoordinates.findMany()
    * ```
    */
  get realtimeCoordinates(): Prisma.RealtimeCoordinatesDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Example: 'Example',
    MobileUser: 'MobileUser',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    Vehicle: 'Vehicle',
    VehicleMake: 'VehicleMake',
    VehicleType: 'VehicleType',
    VehicleModel: 'VehicleModel',
    VerificationToken: 'VerificationToken',
    Milestone: 'Milestone',
    Coordinates: 'Coordinates',
    Adress: 'Adress',
    SeatAssignement: 'SeatAssignement',
    Trip: 'Trip',
    AOI: 'AOI',
    RealtimeTripData: 'RealtimeTripData',
    RealtimeCoordinates: 'RealtimeCoordinates'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MobileUserCountOutputType
   */


  export type MobileUserCountOutputType = {
    TripsDriven: number
    Vehicle: number
    TripsTaken: number
  }

  export type MobileUserCountOutputTypeSelect = {
    TripsDriven?: boolean
    Vehicle?: boolean
    TripsTaken?: boolean
  }

  export type MobileUserCountOutputTypeGetPayload<S extends boolean | null | undefined | MobileUserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MobileUserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (MobileUserCountOutputTypeArgs)
    ? MobileUserCountOutputType 
    : S extends { select: any } & (MobileUserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof MobileUserCountOutputType ? MobileUserCountOutputType[P] : never
  } 
      : MobileUserCountOutputType




  // Custom InputTypes

  /**
   * MobileUserCountOutputType without action
   */
  export type MobileUserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MobileUserCountOutputType
     * 
    **/
    select?: MobileUserCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect = {
    accounts?: boolean
    sessions?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type VehicleCountOutputType
   */


  export type VehicleCountOutputType = {
    trips: number
  }

  export type VehicleCountOutputTypeSelect = {
    trips?: boolean
  }

  export type VehicleCountOutputTypeGetPayload<S extends boolean | null | undefined | VehicleCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VehicleCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VehicleCountOutputTypeArgs)
    ? VehicleCountOutputType 
    : S extends { select: any } & (VehicleCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VehicleCountOutputType ? VehicleCountOutputType[P] : never
  } 
      : VehicleCountOutputType




  // Custom InputTypes

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     * 
    **/
    select?: VehicleCountOutputTypeSelect | null
  }



  /**
   * Count Type VehicleMakeCountOutputType
   */


  export type VehicleMakeCountOutputType = {
    models: number
  }

  export type VehicleMakeCountOutputTypeSelect = {
    models?: boolean
  }

  export type VehicleMakeCountOutputTypeGetPayload<S extends boolean | null | undefined | VehicleMakeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VehicleMakeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VehicleMakeCountOutputTypeArgs)
    ? VehicleMakeCountOutputType 
    : S extends { select: any } & (VehicleMakeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VehicleMakeCountOutputType ? VehicleMakeCountOutputType[P] : never
  } 
      : VehicleMakeCountOutputType




  // Custom InputTypes

  /**
   * VehicleMakeCountOutputType without action
   */
  export type VehicleMakeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VehicleMakeCountOutputType
     * 
    **/
    select?: VehicleMakeCountOutputTypeSelect | null
  }



  /**
   * Count Type VehicleTypeCountOutputType
   */


  export type VehicleTypeCountOutputType = {
    models: number
  }

  export type VehicleTypeCountOutputTypeSelect = {
    models?: boolean
  }

  export type VehicleTypeCountOutputTypeGetPayload<S extends boolean | null | undefined | VehicleTypeCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VehicleTypeCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VehicleTypeCountOutputTypeArgs)
    ? VehicleTypeCountOutputType 
    : S extends { select: any } & (VehicleTypeCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VehicleTypeCountOutputType ? VehicleTypeCountOutputType[P] : never
  } 
      : VehicleTypeCountOutputType




  // Custom InputTypes

  /**
   * VehicleTypeCountOutputType without action
   */
  export type VehicleTypeCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VehicleTypeCountOutputType
     * 
    **/
    select?: VehicleTypeCountOutputTypeSelect | null
  }



  /**
   * Count Type VehicleModelCountOutputType
   */


  export type VehicleModelCountOutputType = {
    vehicles: number
  }

  export type VehicleModelCountOutputTypeSelect = {
    vehicles?: boolean
  }

  export type VehicleModelCountOutputTypeGetPayload<S extends boolean | null | undefined | VehicleModelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VehicleModelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VehicleModelCountOutputTypeArgs)
    ? VehicleModelCountOutputType 
    : S extends { select: any } & (VehicleModelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VehicleModelCountOutputType ? VehicleModelCountOutputType[P] : never
  } 
      : VehicleModelCountOutputType




  // Custom InputTypes

  /**
   * VehicleModelCountOutputType without action
   */
  export type VehicleModelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VehicleModelCountOutputType
     * 
    **/
    select?: VehicleModelCountOutputTypeSelect | null
  }



  /**
   * Count Type CoordinatesCountOutputType
   */


  export type CoordinatesCountOutputType = {
    milestone: number
    Adress: number
    AOI: number
  }

  export type CoordinatesCountOutputTypeSelect = {
    milestone?: boolean
    Adress?: boolean
    AOI?: boolean
  }

  export type CoordinatesCountOutputTypeGetPayload<S extends boolean | null | undefined | CoordinatesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CoordinatesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CoordinatesCountOutputTypeArgs)
    ? CoordinatesCountOutputType 
    : S extends { select: any } & (CoordinatesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CoordinatesCountOutputType ? CoordinatesCountOutputType[P] : never
  } 
      : CoordinatesCountOutputType




  // Custom InputTypes

  /**
   * CoordinatesCountOutputType without action
   */
  export type CoordinatesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CoordinatesCountOutputType
     * 
    **/
    select?: CoordinatesCountOutputTypeSelect | null
  }



  /**
   * Count Type AdressCountOutputType
   */


  export type AdressCountOutputType = {
    PickUps: number
    DropOffs: number
    Departures: number
    Arrivals: number
  }

  export type AdressCountOutputTypeSelect = {
    PickUps?: boolean
    DropOffs?: boolean
    Departures?: boolean
    Arrivals?: boolean
  }

  export type AdressCountOutputTypeGetPayload<S extends boolean | null | undefined | AdressCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AdressCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AdressCountOutputTypeArgs)
    ? AdressCountOutputType 
    : S extends { select: any } & (AdressCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AdressCountOutputType ? AdressCountOutputType[P] : never
  } 
      : AdressCountOutputType




  // Custom InputTypes

  /**
   * AdressCountOutputType without action
   */
  export type AdressCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AdressCountOutputType
     * 
    **/
    select?: AdressCountOutputTypeSelect | null
  }



  /**
   * Count Type TripCountOutputType
   */


  export type TripCountOutputType = {
    seatAssignments: number
    realtimeTripData: number
  }

  export type TripCountOutputTypeSelect = {
    seatAssignments?: boolean
    realtimeTripData?: boolean
  }

  export type TripCountOutputTypeGetPayload<S extends boolean | null | undefined | TripCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TripCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TripCountOutputTypeArgs)
    ? TripCountOutputType 
    : S extends { select: any } & (TripCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TripCountOutputType ? TripCountOutputType[P] : never
  } 
      : TripCountOutputType




  // Custom InputTypes

  /**
   * TripCountOutputType without action
   */
  export type TripCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TripCountOutputType
     * 
    **/
    select?: TripCountOutputTypeSelect | null
  }



  /**
   * Count Type AOICountOutputType
   */


  export type AOICountOutputType = {
    coordinates: number
  }

  export type AOICountOutputTypeSelect = {
    coordinates?: boolean
  }

  export type AOICountOutputTypeGetPayload<S extends boolean | null | undefined | AOICountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AOICountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AOICountOutputTypeArgs)
    ? AOICountOutputType 
    : S extends { select: any } & (AOICountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AOICountOutputType ? AOICountOutputType[P] : never
  } 
      : AOICountOutputType




  // Custom InputTypes

  /**
   * AOICountOutputType without action
   */
  export type AOICountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AOICountOutputType
     * 
    **/
    select?: AOICountOutputTypeSelect | null
  }



  /**
   * Count Type RealtimeCoordinatesCountOutputType
   */


  export type RealtimeCoordinatesCountOutputType = {
    tripData: number
  }

  export type RealtimeCoordinatesCountOutputTypeSelect = {
    tripData?: boolean
  }

  export type RealtimeCoordinatesCountOutputTypeGetPayload<S extends boolean | null | undefined | RealtimeCoordinatesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealtimeCoordinatesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (RealtimeCoordinatesCountOutputTypeArgs)
    ? RealtimeCoordinatesCountOutputType 
    : S extends { select: any } & (RealtimeCoordinatesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RealtimeCoordinatesCountOutputType ? RealtimeCoordinatesCountOutputType[P] : never
  } 
      : RealtimeCoordinatesCountOutputType




  // Custom InputTypes

  /**
   * RealtimeCoordinatesCountOutputType without action
   */
  export type RealtimeCoordinatesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinatesCountOutputType
     * 
    **/
    select?: RealtimeCoordinatesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Example
   */


  export type AggregateExample = {
    _count: ExampleCountAggregateOutputType | null
    _min: ExampleMinAggregateOutputType | null
    _max: ExampleMaxAggregateOutputType | null
  }

  export type ExampleMinAggregateOutputType = {
    id: string | null
  }

  export type ExampleMaxAggregateOutputType = {
    id: string | null
  }

  export type ExampleCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ExampleMinAggregateInputType = {
    id?: true
  }

  export type ExampleMaxAggregateInputType = {
    id?: true
  }

  export type ExampleCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ExampleAggregateArgs = {
    /**
     * Filter which Example to aggregate.
     * 
    **/
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     * 
    **/
    orderBy?: Enumerable<ExampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Examples
    **/
    _count?: true | ExampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExampleMaxAggregateInputType
  }

  export type GetExampleAggregateType<T extends ExampleAggregateArgs> = {
        [P in keyof T & keyof AggregateExample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExample[P]>
      : GetScalarType<T[P], AggregateExample[P]>
  }




  export type ExampleGroupByArgs = {
    where?: ExampleWhereInput
    orderBy?: Enumerable<ExampleOrderByWithAggregationInput>
    by: Array<ExampleScalarFieldEnum>
    having?: ExampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExampleCountAggregateInputType | true
    _min?: ExampleMinAggregateInputType
    _max?: ExampleMaxAggregateInputType
  }


  export type ExampleGroupByOutputType = {
    id: string
    _count: ExampleCountAggregateOutputType | null
    _min: ExampleMinAggregateOutputType | null
    _max: ExampleMaxAggregateOutputType | null
  }

  type GetExampleGroupByPayload<T extends ExampleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ExampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExampleGroupByOutputType[P]>
            : GetScalarType<T[P], ExampleGroupByOutputType[P]>
        }
      >
    >


  export type ExampleSelect = {
    id?: boolean
  }


  export type ExampleGetPayload<S extends boolean | null | undefined | ExampleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Example :
    S extends undefined ? never :
    S extends { include: any } & (ExampleArgs | ExampleFindManyArgs)
    ? Example 
    : S extends { select: any } & (ExampleArgs | ExampleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Example ? Example[P] : never
  } 
      : Example


  type ExampleCountArgs = Merge<
    Omit<ExampleFindManyArgs, 'select' | 'include'> & {
      select?: ExampleCountAggregateInputType | true
    }
  >

  export interface ExampleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Example that matches the filter.
     * @param {ExampleFindUniqueArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExampleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExampleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Example'> extends True ? Prisma__ExampleClient<ExampleGetPayload<T>> : Prisma__ExampleClient<ExampleGetPayload<T> | null, null>

    /**
     * Find one Example that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExampleFindUniqueOrThrowArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExampleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ExampleFindUniqueOrThrowArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Find the first Example that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindFirstArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExampleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExampleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Example'> extends True ? Prisma__ExampleClient<ExampleGetPayload<T>> : Prisma__ExampleClient<ExampleGetPayload<T> | null, null>

    /**
     * Find the first Example that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindFirstOrThrowArgs} args - Arguments to find a Example
     * @example
     * // Get one Example
     * const example = await prisma.example.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExampleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ExampleFindFirstOrThrowArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Find zero or more Examples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Examples
     * const examples = await prisma.example.findMany()
     * 
     * // Get first 10 Examples
     * const examples = await prisma.example.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exampleWithIdOnly = await prisma.example.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExampleFindManyArgs>(
      args?: SelectSubset<T, ExampleFindManyArgs>
    ): PrismaPromise<Array<ExampleGetPayload<T>>>

    /**
     * Create a Example.
     * @param {ExampleCreateArgs} args - Arguments to create a Example.
     * @example
     * // Create one Example
     * const Example = await prisma.example.create({
     *   data: {
     *     // ... data to create a Example
     *   }
     * })
     * 
    **/
    create<T extends ExampleCreateArgs>(
      args: SelectSubset<T, ExampleCreateArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Create many Examples.
     *     @param {ExampleCreateManyArgs} args - Arguments to create many Examples.
     *     @example
     *     // Create many Examples
     *     const example = await prisma.example.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExampleCreateManyArgs>(
      args?: SelectSubset<T, ExampleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Example.
     * @param {ExampleDeleteArgs} args - Arguments to delete one Example.
     * @example
     * // Delete one Example
     * const Example = await prisma.example.delete({
     *   where: {
     *     // ... filter to delete one Example
     *   }
     * })
     * 
    **/
    delete<T extends ExampleDeleteArgs>(
      args: SelectSubset<T, ExampleDeleteArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Update one Example.
     * @param {ExampleUpdateArgs} args - Arguments to update one Example.
     * @example
     * // Update one Example
     * const example = await prisma.example.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExampleUpdateArgs>(
      args: SelectSubset<T, ExampleUpdateArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Delete zero or more Examples.
     * @param {ExampleDeleteManyArgs} args - Arguments to filter Examples to delete.
     * @example
     * // Delete a few Examples
     * const { count } = await prisma.example.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExampleDeleteManyArgs>(
      args?: SelectSubset<T, ExampleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Examples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Examples
     * const example = await prisma.example.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExampleUpdateManyArgs>(
      args: SelectSubset<T, ExampleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Example.
     * @param {ExampleUpsertArgs} args - Arguments to update or create a Example.
     * @example
     * // Update or create a Example
     * const example = await prisma.example.upsert({
     *   create: {
     *     // ... data to create a Example
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Example we want to update
     *   }
     * })
    **/
    upsert<T extends ExampleUpsertArgs>(
      args: SelectSubset<T, ExampleUpsertArgs>
    ): Prisma__ExampleClient<ExampleGetPayload<T>>

    /**
     * Count the number of Examples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleCountArgs} args - Arguments to filter Examples to count.
     * @example
     * // Count the number of Examples
     * const count = await prisma.example.count({
     *   where: {
     *     // ... the filter for the Examples we want to count
     *   }
     * })
    **/
    count<T extends ExampleCountArgs>(
      args?: Subset<T, ExampleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Example.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExampleAggregateArgs>(args: Subset<T, ExampleAggregateArgs>): PrismaPromise<GetExampleAggregateType<T>>

    /**
     * Group by Example.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExampleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExampleGroupByArgs['orderBy'] }
        : { orderBy?: ExampleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExampleGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Example.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExampleClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Example base type for findUnique actions
   */
  export type ExampleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Example
     * 
    **/
    select?: ExampleSelect | null
    /**
     * Filter, which Example to fetch.
     * 
    **/
    where: ExampleWhereUniqueInput
  }

  /**
   * Example findUnique
   */
  export interface ExampleFindUniqueArgs extends ExampleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Example findUniqueOrThrow
   */
  export type ExampleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Example
     * 
    **/
    select?: ExampleSelect | null
    /**
     * Filter, which Example to fetch.
     * 
    **/
    where: ExampleWhereUniqueInput
  }


  /**
   * Example base type for findFirst actions
   */
  export type ExampleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Example
     * 
    **/
    select?: ExampleSelect | null
    /**
     * Filter, which Example to fetch.
     * 
    **/
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     * 
    **/
    orderBy?: Enumerable<ExampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examples.
     * 
    **/
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     * 
    **/
    distinct?: Enumerable<ExampleScalarFieldEnum>
  }

  /**
   * Example findFirst
   */
  export interface ExampleFindFirstArgs extends ExampleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Example findFirstOrThrow
   */
  export type ExampleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Example
     * 
    **/
    select?: ExampleSelect | null
    /**
     * Filter, which Example to fetch.
     * 
    **/
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     * 
    **/
    orderBy?: Enumerable<ExampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Examples.
     * 
    **/
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Examples.
     * 
    **/
    distinct?: Enumerable<ExampleScalarFieldEnum>
  }


  /**
   * Example findMany
   */
  export type ExampleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Example
     * 
    **/
    select?: ExampleSelect | null
    /**
     * Filter, which Examples to fetch.
     * 
    **/
    where?: ExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Examples to fetch.
     * 
    **/
    orderBy?: Enumerable<ExampleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Examples.
     * 
    **/
    cursor?: ExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Examples from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Examples.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ExampleScalarFieldEnum>
  }


  /**
   * Example create
   */
  export type ExampleCreateArgs = {
    /**
     * Select specific fields to fetch from the Example
     * 
    **/
    select?: ExampleSelect | null
    /**
     * The data needed to create a Example.
     * 
    **/
    data: XOR<ExampleCreateInput, ExampleUncheckedCreateInput>
  }


  /**
   * Example createMany
   */
  export type ExampleCreateManyArgs = {
    /**
     * The data used to create many Examples.
     * 
    **/
    data: Enumerable<ExampleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Example update
   */
  export type ExampleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Example
     * 
    **/
    select?: ExampleSelect | null
    /**
     * The data needed to update a Example.
     * 
    **/
    data: XOR<ExampleUpdateInput, ExampleUncheckedUpdateInput>
    /**
     * Choose, which Example to update.
     * 
    **/
    where: ExampleWhereUniqueInput
  }


  /**
   * Example updateMany
   */
  export type ExampleUpdateManyArgs = {
    /**
     * The data used to update Examples.
     * 
    **/
    data: XOR<ExampleUpdateManyMutationInput, ExampleUncheckedUpdateManyInput>
    /**
     * Filter which Examples to update
     * 
    **/
    where?: ExampleWhereInput
  }


  /**
   * Example upsert
   */
  export type ExampleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Example
     * 
    **/
    select?: ExampleSelect | null
    /**
     * The filter to search for the Example to update in case it exists.
     * 
    **/
    where: ExampleWhereUniqueInput
    /**
     * In case the Example found by the `where` argument doesn't exist, create a new Example with this data.
     * 
    **/
    create: XOR<ExampleCreateInput, ExampleUncheckedCreateInput>
    /**
     * In case the Example was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ExampleUpdateInput, ExampleUncheckedUpdateInput>
  }


  /**
   * Example delete
   */
  export type ExampleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Example
     * 
    **/
    select?: ExampleSelect | null
    /**
     * Filter which Example to delete.
     * 
    **/
    where: ExampleWhereUniqueInput
  }


  /**
   * Example deleteMany
   */
  export type ExampleDeleteManyArgs = {
    /**
     * Filter which Examples to delete
     * 
    **/
    where?: ExampleWhereInput
  }


  /**
   * Example without action
   */
  export type ExampleArgs = {
    /**
     * Select specific fields to fetch from the Example
     * 
    **/
    select?: ExampleSelect | null
  }



  /**
   * Model MobileUser
   */


  export type AggregateMobileUser = {
    _count: MobileUserCountAggregateOutputType | null
    _avg: MobileUserAvgAggregateOutputType | null
    _sum: MobileUserSumAggregateOutputType | null
    _min: MobileUserMinAggregateOutputType | null
    _max: MobileUserMaxAggregateOutputType | null
  }

  export type MobileUserAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type MobileUserSumAggregateOutputType = {
    expires_at: number | null
  }

  export type MobileUserMinAggregateOutputType = {
    id: string | null
    name: string | null
    surname: string | null
    email: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    lastLogin: Date | null
    legajoUCA: string | null
    birthDate: Date | null
    sex: string | null
    phone: string | null
    isDriver: boolean | null
    completedSurvey: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MobileUserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    surname: string | null
    email: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    lastLogin: Date | null
    legajoUCA: string | null
    birthDate: Date | null
    sex: string | null
    phone: string | null
    isDriver: boolean | null
    completedSurvey: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MobileUserCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    email: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    lastLogin: number
    legajoUCA: number
    birthDate: number
    sex: number
    phone: number
    isDriver: number
    completedSurvey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MobileUserAvgAggregateInputType = {
    expires_at?: true
  }

  export type MobileUserSumAggregateInputType = {
    expires_at?: true
  }

  export type MobileUserMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    lastLogin?: true
    legajoUCA?: true
    birthDate?: true
    sex?: true
    phone?: true
    isDriver?: true
    completedSurvey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MobileUserMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    lastLogin?: true
    legajoUCA?: true
    birthDate?: true
    sex?: true
    phone?: true
    isDriver?: true
    completedSurvey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MobileUserCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    email?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    lastLogin?: true
    legajoUCA?: true
    birthDate?: true
    sex?: true
    phone?: true
    isDriver?: true
    completedSurvey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MobileUserAggregateArgs = {
    /**
     * Filter which MobileUser to aggregate.
     * 
    **/
    where?: MobileUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<MobileUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MobileUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MobileUsers
    **/
    _count?: true | MobileUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MobileUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MobileUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MobileUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MobileUserMaxAggregateInputType
  }

  export type GetMobileUserAggregateType<T extends MobileUserAggregateArgs> = {
        [P in keyof T & keyof AggregateMobileUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMobileUser[P]>
      : GetScalarType<T[P], AggregateMobileUser[P]>
  }




  export type MobileUserGroupByArgs = {
    where?: MobileUserWhereInput
    orderBy?: Enumerable<MobileUserOrderByWithAggregationInput>
    by: Array<MobileUserScalarFieldEnum>
    having?: MobileUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MobileUserCountAggregateInputType | true
    _avg?: MobileUserAvgAggregateInputType
    _sum?: MobileUserSumAggregateInputType
    _min?: MobileUserMinAggregateInputType
    _max?: MobileUserMaxAggregateInputType
  }


  export type MobileUserGroupByOutputType = {
    id: string
    name: string
    surname: string | null
    email: string
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    lastLogin: Date
    legajoUCA: string | null
    birthDate: Date | null
    sex: string | null
    phone: string | null
    isDriver: boolean
    completedSurvey: boolean
    createdAt: Date | null
    updatedAt: Date | null
    _count: MobileUserCountAggregateOutputType | null
    _avg: MobileUserAvgAggregateOutputType | null
    _sum: MobileUserSumAggregateOutputType | null
    _min: MobileUserMinAggregateOutputType | null
    _max: MobileUserMaxAggregateOutputType | null
  }

  type GetMobileUserGroupByPayload<T extends MobileUserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MobileUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MobileUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MobileUserGroupByOutputType[P]>
            : GetScalarType<T[P], MobileUserGroupByOutputType[P]>
        }
      >
    >


  export type MobileUserSelect = {
    id?: boolean
    name?: boolean
    surname?: boolean
    email?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    lastLogin?: boolean
    legajoUCA?: boolean
    birthDate?: boolean
    sex?: boolean
    phone?: boolean
    isDriver?: boolean
    completedSurvey?: boolean
    TripsDriven?: boolean | MobileUserTripsDrivenArgs
    createdAt?: boolean
    updatedAt?: boolean
    Vehicle?: boolean | MobileUserVehicleArgs
    TripsTaken?: boolean | MobileUserTripsTakenArgs
    _count?: boolean | MobileUserCountOutputTypeArgs
  }


  export type MobileUserInclude = {
    TripsDriven?: boolean | MobileUserTripsDrivenArgs
    Vehicle?: boolean | MobileUserVehicleArgs
    TripsTaken?: boolean | MobileUserTripsTakenArgs
    _count?: boolean | MobileUserCountOutputTypeArgs
  } 

  export type MobileUserGetPayload<S extends boolean | null | undefined | MobileUserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? MobileUser :
    S extends undefined ? never :
    S extends { include: any } & (MobileUserArgs | MobileUserFindManyArgs)
    ? MobileUser  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'TripsDriven' ? Array < TripGetPayload<S['include'][P]>>  :
        P extends 'Vehicle' ? Array < VehicleGetPayload<S['include'][P]>>  :
        P extends 'TripsTaken' ? Array < SeatAssignementGetPayload<S['include'][P]>>  :
        P extends '_count' ? MobileUserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (MobileUserArgs | MobileUserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'TripsDriven' ? Array < TripGetPayload<S['select'][P]>>  :
        P extends 'Vehicle' ? Array < VehicleGetPayload<S['select'][P]>>  :
        P extends 'TripsTaken' ? Array < SeatAssignementGetPayload<S['select'][P]>>  :
        P extends '_count' ? MobileUserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof MobileUser ? MobileUser[P] : never
  } 
      : MobileUser


  type MobileUserCountArgs = Merge<
    Omit<MobileUserFindManyArgs, 'select' | 'include'> & {
      select?: MobileUserCountAggregateInputType | true
    }
  >

  export interface MobileUserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one MobileUser that matches the filter.
     * @param {MobileUserFindUniqueArgs} args - Arguments to find a MobileUser
     * @example
     * // Get one MobileUser
     * const mobileUser = await prisma.mobileUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MobileUserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MobileUserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'MobileUser'> extends True ? Prisma__MobileUserClient<MobileUserGetPayload<T>> : Prisma__MobileUserClient<MobileUserGetPayload<T> | null, null>

    /**
     * Find one MobileUser that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MobileUserFindUniqueOrThrowArgs} args - Arguments to find a MobileUser
     * @example
     * // Get one MobileUser
     * const mobileUser = await prisma.mobileUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MobileUserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MobileUserFindUniqueOrThrowArgs>
    ): Prisma__MobileUserClient<MobileUserGetPayload<T>>

    /**
     * Find the first MobileUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileUserFindFirstArgs} args - Arguments to find a MobileUser
     * @example
     * // Get one MobileUser
     * const mobileUser = await prisma.mobileUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MobileUserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MobileUserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'MobileUser'> extends True ? Prisma__MobileUserClient<MobileUserGetPayload<T>> : Prisma__MobileUserClient<MobileUserGetPayload<T> | null, null>

    /**
     * Find the first MobileUser that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileUserFindFirstOrThrowArgs} args - Arguments to find a MobileUser
     * @example
     * // Get one MobileUser
     * const mobileUser = await prisma.mobileUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MobileUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MobileUserFindFirstOrThrowArgs>
    ): Prisma__MobileUserClient<MobileUserGetPayload<T>>

    /**
     * Find zero or more MobileUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileUserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MobileUsers
     * const mobileUsers = await prisma.mobileUser.findMany()
     * 
     * // Get first 10 MobileUsers
     * const mobileUsers = await prisma.mobileUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mobileUserWithIdOnly = await prisma.mobileUser.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MobileUserFindManyArgs>(
      args?: SelectSubset<T, MobileUserFindManyArgs>
    ): PrismaPromise<Array<MobileUserGetPayload<T>>>

    /**
     * Create a MobileUser.
     * @param {MobileUserCreateArgs} args - Arguments to create a MobileUser.
     * @example
     * // Create one MobileUser
     * const MobileUser = await prisma.mobileUser.create({
     *   data: {
     *     // ... data to create a MobileUser
     *   }
     * })
     * 
    **/
    create<T extends MobileUserCreateArgs>(
      args: SelectSubset<T, MobileUserCreateArgs>
    ): Prisma__MobileUserClient<MobileUserGetPayload<T>>

    /**
     * Create many MobileUsers.
     *     @param {MobileUserCreateManyArgs} args - Arguments to create many MobileUsers.
     *     @example
     *     // Create many MobileUsers
     *     const mobileUser = await prisma.mobileUser.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MobileUserCreateManyArgs>(
      args?: SelectSubset<T, MobileUserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a MobileUser.
     * @param {MobileUserDeleteArgs} args - Arguments to delete one MobileUser.
     * @example
     * // Delete one MobileUser
     * const MobileUser = await prisma.mobileUser.delete({
     *   where: {
     *     // ... filter to delete one MobileUser
     *   }
     * })
     * 
    **/
    delete<T extends MobileUserDeleteArgs>(
      args: SelectSubset<T, MobileUserDeleteArgs>
    ): Prisma__MobileUserClient<MobileUserGetPayload<T>>

    /**
     * Update one MobileUser.
     * @param {MobileUserUpdateArgs} args - Arguments to update one MobileUser.
     * @example
     * // Update one MobileUser
     * const mobileUser = await prisma.mobileUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MobileUserUpdateArgs>(
      args: SelectSubset<T, MobileUserUpdateArgs>
    ): Prisma__MobileUserClient<MobileUserGetPayload<T>>

    /**
     * Delete zero or more MobileUsers.
     * @param {MobileUserDeleteManyArgs} args - Arguments to filter MobileUsers to delete.
     * @example
     * // Delete a few MobileUsers
     * const { count } = await prisma.mobileUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MobileUserDeleteManyArgs>(
      args?: SelectSubset<T, MobileUserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more MobileUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MobileUsers
     * const mobileUser = await prisma.mobileUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MobileUserUpdateManyArgs>(
      args: SelectSubset<T, MobileUserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one MobileUser.
     * @param {MobileUserUpsertArgs} args - Arguments to update or create a MobileUser.
     * @example
     * // Update or create a MobileUser
     * const mobileUser = await prisma.mobileUser.upsert({
     *   create: {
     *     // ... data to create a MobileUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MobileUser we want to update
     *   }
     * })
    **/
    upsert<T extends MobileUserUpsertArgs>(
      args: SelectSubset<T, MobileUserUpsertArgs>
    ): Prisma__MobileUserClient<MobileUserGetPayload<T>>

    /**
     * Count the number of MobileUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileUserCountArgs} args - Arguments to filter MobileUsers to count.
     * @example
     * // Count the number of MobileUsers
     * const count = await prisma.mobileUser.count({
     *   where: {
     *     // ... the filter for the MobileUsers we want to count
     *   }
     * })
    **/
    count<T extends MobileUserCountArgs>(
      args?: Subset<T, MobileUserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MobileUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MobileUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MobileUserAggregateArgs>(args: Subset<T, MobileUserAggregateArgs>): PrismaPromise<GetMobileUserAggregateType<T>>

    /**
     * Group by MobileUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MobileUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MobileUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MobileUserGroupByArgs['orderBy'] }
        : { orderBy?: MobileUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MobileUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMobileUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for MobileUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MobileUserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    TripsDriven<T extends MobileUserTripsDrivenArgs= {}>(args?: Subset<T, MobileUserTripsDrivenArgs>): PrismaPromise<Array<TripGetPayload<T>>| Null>;

    Vehicle<T extends MobileUserVehicleArgs= {}>(args?: Subset<T, MobileUserVehicleArgs>): PrismaPromise<Array<VehicleGetPayload<T>>| Null>;

    TripsTaken<T extends MobileUserTripsTakenArgs= {}>(args?: Subset<T, MobileUserTripsTakenArgs>): PrismaPromise<Array<SeatAssignementGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * MobileUser base type for findUnique actions
   */
  export type MobileUserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the MobileUser
     * 
    **/
    select?: MobileUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MobileUserInclude | null
    /**
     * Filter, which MobileUser to fetch.
     * 
    **/
    where: MobileUserWhereUniqueInput
  }

  /**
   * MobileUser findUnique
   */
  export interface MobileUserFindUniqueArgs extends MobileUserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MobileUser findUniqueOrThrow
   */
  export type MobileUserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MobileUser
     * 
    **/
    select?: MobileUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MobileUserInclude | null
    /**
     * Filter, which MobileUser to fetch.
     * 
    **/
    where: MobileUserWhereUniqueInput
  }


  /**
   * MobileUser base type for findFirst actions
   */
  export type MobileUserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the MobileUser
     * 
    **/
    select?: MobileUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MobileUserInclude | null
    /**
     * Filter, which MobileUser to fetch.
     * 
    **/
    where?: MobileUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<MobileUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MobileUsers.
     * 
    **/
    cursor?: MobileUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MobileUsers.
     * 
    **/
    distinct?: Enumerable<MobileUserScalarFieldEnum>
  }

  /**
   * MobileUser findFirst
   */
  export interface MobileUserFindFirstArgs extends MobileUserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * MobileUser findFirstOrThrow
   */
  export type MobileUserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the MobileUser
     * 
    **/
    select?: MobileUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MobileUserInclude | null
    /**
     * Filter, which MobileUser to fetch.
     * 
    **/
    where?: MobileUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<MobileUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MobileUsers.
     * 
    **/
    cursor?: MobileUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileUsers.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MobileUsers.
     * 
    **/
    distinct?: Enumerable<MobileUserScalarFieldEnum>
  }


  /**
   * MobileUser findMany
   */
  export type MobileUserFindManyArgs = {
    /**
     * Select specific fields to fetch from the MobileUser
     * 
    **/
    select?: MobileUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MobileUserInclude | null
    /**
     * Filter, which MobileUsers to fetch.
     * 
    **/
    where?: MobileUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MobileUsers to fetch.
     * 
    **/
    orderBy?: Enumerable<MobileUserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MobileUsers.
     * 
    **/
    cursor?: MobileUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MobileUsers from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MobileUsers.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MobileUserScalarFieldEnum>
  }


  /**
   * MobileUser create
   */
  export type MobileUserCreateArgs = {
    /**
     * Select specific fields to fetch from the MobileUser
     * 
    **/
    select?: MobileUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MobileUserInclude | null
    /**
     * The data needed to create a MobileUser.
     * 
    **/
    data: XOR<MobileUserCreateInput, MobileUserUncheckedCreateInput>
  }


  /**
   * MobileUser createMany
   */
  export type MobileUserCreateManyArgs = {
    /**
     * The data used to create many MobileUsers.
     * 
    **/
    data: Enumerable<MobileUserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * MobileUser update
   */
  export type MobileUserUpdateArgs = {
    /**
     * Select specific fields to fetch from the MobileUser
     * 
    **/
    select?: MobileUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MobileUserInclude | null
    /**
     * The data needed to update a MobileUser.
     * 
    **/
    data: XOR<MobileUserUpdateInput, MobileUserUncheckedUpdateInput>
    /**
     * Choose, which MobileUser to update.
     * 
    **/
    where: MobileUserWhereUniqueInput
  }


  /**
   * MobileUser updateMany
   */
  export type MobileUserUpdateManyArgs = {
    /**
     * The data used to update MobileUsers.
     * 
    **/
    data: XOR<MobileUserUpdateManyMutationInput, MobileUserUncheckedUpdateManyInput>
    /**
     * Filter which MobileUsers to update
     * 
    **/
    where?: MobileUserWhereInput
  }


  /**
   * MobileUser upsert
   */
  export type MobileUserUpsertArgs = {
    /**
     * Select specific fields to fetch from the MobileUser
     * 
    **/
    select?: MobileUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MobileUserInclude | null
    /**
     * The filter to search for the MobileUser to update in case it exists.
     * 
    **/
    where: MobileUserWhereUniqueInput
    /**
     * In case the MobileUser found by the `where` argument doesn't exist, create a new MobileUser with this data.
     * 
    **/
    create: XOR<MobileUserCreateInput, MobileUserUncheckedCreateInput>
    /**
     * In case the MobileUser was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MobileUserUpdateInput, MobileUserUncheckedUpdateInput>
  }


  /**
   * MobileUser delete
   */
  export type MobileUserDeleteArgs = {
    /**
     * Select specific fields to fetch from the MobileUser
     * 
    **/
    select?: MobileUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MobileUserInclude | null
    /**
     * Filter which MobileUser to delete.
     * 
    **/
    where: MobileUserWhereUniqueInput
  }


  /**
   * MobileUser deleteMany
   */
  export type MobileUserDeleteManyArgs = {
    /**
     * Filter which MobileUsers to delete
     * 
    **/
    where?: MobileUserWhereInput
  }


  /**
   * MobileUser.TripsDriven
   */
  export type MobileUserTripsDrivenArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    where?: TripWhereInput
    orderBy?: Enumerable<TripOrderByWithRelationInput>
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TripScalarFieldEnum>
  }


  /**
   * MobileUser.Vehicle
   */
  export type MobileUserVehicleArgs = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    where?: VehicleWhereInput
    orderBy?: Enumerable<VehicleOrderByWithRelationInput>
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VehicleScalarFieldEnum>
  }


  /**
   * MobileUser.TripsTaken
   */
  export type MobileUserTripsTakenArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    where?: SeatAssignementWhereInput
    orderBy?: Enumerable<SeatAssignementOrderByWithRelationInput>
    cursor?: SeatAssignementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SeatAssignementScalarFieldEnum>
  }


  /**
   * MobileUser without action
   */
  export type MobileUserArgs = {
    /**
     * Select specific fields to fetch from the MobileUser
     * 
    **/
    select?: MobileUserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MobileUserInclude | null
  }



  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    ext_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    ext_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    ext_expires_in: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    ext_expires_in: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    ext_expires_in: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    ext_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    ext_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    ext_expires_in?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    ext_expires_in?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    ext_expires_in?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: Array<AccountScalarFieldEnum>
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    ext_expires_in: number | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserArgs
    ext_expires_in?: boolean
  }


  export type AccountInclude = {
    user?: boolean | UserArgs
  } 

  export type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Account :
    S extends undefined ? never :
    S extends { include: any } & (AccountArgs | AccountFindManyArgs)
    ? Account  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountArgs | AccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
      : Account


  type AccountCountArgs = Merge<
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }
  >

  export interface AccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): PrismaPromise<Array<AccountGetPayload<T>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     * 
    **/
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     * 
    **/
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     * 
    **/
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     * 
    **/
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     * 
    **/
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     * 
    **/
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     * 
    **/
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     * 
    **/
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     * 
    **/
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     * 
    **/
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     * 
    **/
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     * 
    **/
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserArgs
  }


  export type SessionInclude = {
    user?: boolean | UserArgs
  } 

  export type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Session :
    S extends undefined ? never :
    S extends { include: any } & (SessionArgs | SessionFindManyArgs)
    ? Session  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'user' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SessionArgs | SessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'user' ? UserGetPayload<S['select'][P]> :  P extends keyof Session ? Session[P] : never
  } 
      : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): PrismaPromise<Array<SessionGetPayload<T>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     * 
    **/
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     * 
    **/
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    accounts?: boolean | UserAccountsArgs
    sessions?: boolean | UserSessionsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    accounts?: boolean | UserAccountsArgs
    sessions?: boolean | UserSessionsArgs
    _count?: boolean | UserCountOutputTypeArgs
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends 'sessions' ? Array < SessionGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    accounts<T extends UserAccountsArgs= {}>(args?: Subset<T, UserAccountsArgs>): PrismaPromise<Array<AccountGetPayload<T>>| Null>;

    sessions<T extends UserSessionsArgs= {}>(args?: Subset<T, UserSessionsArgs>): PrismaPromise<Array<SessionGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type UserAccountsArgs = {
    /**
     * Select specific fields to fetch from the Account
     * 
    **/
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AccountInclude | null
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * User.sessions
   */
  export type UserSessionsArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SessionInclude | null
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Vehicle
   */


  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    modelId: number | null
    maxPassengers: number | null
  }

  export type VehicleSumAggregateOutputType = {
    modelId: number | null
    maxPassengers: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    modelId: number | null
    licensePlate: string | null
    driverId: string | null
    maxPassengers: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    modelId: number | null
    licensePlate: string | null
    driverId: string | null
    maxPassengers: number | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    modelId: number
    licensePlate: number
    driverId: number
    maxPassengers: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    modelId?: true
    maxPassengers?: true
  }

  export type VehicleSumAggregateInputType = {
    modelId?: true
    maxPassengers?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    modelId?: true
    licensePlate?: true
    driverId?: true
    maxPassengers?: true
    createAt?: true
    updateAt?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    modelId?: true
    licensePlate?: true
    driverId?: true
    maxPassengers?: true
    createAt?: true
    updateAt?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    modelId?: true
    licensePlate?: true
    driverId?: true
    maxPassengers?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type VehicleAggregateArgs = {
    /**
     * Filter which Vehicle to aggregate.
     * 
    **/
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs = {
    where?: VehicleWhereInput
    orderBy?: Enumerable<VehicleOrderByWithAggregationInput>
    by: Array<VehicleScalarFieldEnum>
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }


  export type VehicleGroupByOutputType = {
    id: string
    modelId: number
    licensePlate: string
    driverId: string
    maxPassengers: number
    createAt: Date
    updateAt: Date
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect = {
    id?: boolean
    model?: boolean | VehicleModelArgs
    modelId?: boolean
    licensePlate?: boolean
    driver?: boolean | MobileUserArgs
    driverId?: boolean
    trips?: boolean | VehicleTripsArgs
    maxPassengers?: boolean
    createAt?: boolean
    updateAt?: boolean
    _count?: boolean | VehicleCountOutputTypeArgs
  }


  export type VehicleInclude = {
    model?: boolean | VehicleModelArgs
    driver?: boolean | MobileUserArgs
    trips?: boolean | VehicleTripsArgs
    _count?: boolean | VehicleCountOutputTypeArgs
  } 

  export type VehicleGetPayload<S extends boolean | null | undefined | VehicleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Vehicle :
    S extends undefined ? never :
    S extends { include: any } & (VehicleArgs | VehicleFindManyArgs)
    ? Vehicle  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'model' ? VehicleModelGetPayload<S['include'][P]> :
        P extends 'driver' ? MobileUserGetPayload<S['include'][P]> :
        P extends 'trips' ? Array < TripGetPayload<S['include'][P]>>  :
        P extends '_count' ? VehicleCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VehicleArgs | VehicleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'model' ? VehicleModelGetPayload<S['select'][P]> :
        P extends 'driver' ? MobileUserGetPayload<S['select'][P]> :
        P extends 'trips' ? Array < TripGetPayload<S['select'][P]>>  :
        P extends '_count' ? VehicleCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Vehicle ? Vehicle[P] : never
  } 
      : Vehicle


  type VehicleCountArgs = Merge<
    Omit<VehicleFindManyArgs, 'select' | 'include'> & {
      select?: VehicleCountAggregateInputType | true
    }
  >

  export interface VehicleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VehicleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VehicleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Vehicle'> extends True ? Prisma__VehicleClient<VehicleGetPayload<T>> : Prisma__VehicleClient<VehicleGetPayload<T> | null, null>

    /**
     * Find one Vehicle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VehicleFindUniqueOrThrowArgs>
    ): Prisma__VehicleClient<VehicleGetPayload<T>>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VehicleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VehicleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Vehicle'> extends True ? Prisma__VehicleClient<VehicleGetPayload<T>> : Prisma__VehicleClient<VehicleGetPayload<T> | null, null>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VehicleFindFirstOrThrowArgs>
    ): Prisma__VehicleClient<VehicleGetPayload<T>>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VehicleFindManyArgs>(
      args?: SelectSubset<T, VehicleFindManyArgs>
    ): PrismaPromise<Array<VehicleGetPayload<T>>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
    **/
    create<T extends VehicleCreateArgs>(
      args: SelectSubset<T, VehicleCreateArgs>
    ): Prisma__VehicleClient<VehicleGetPayload<T>>

    /**
     * Create many Vehicles.
     *     @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicle = await prisma.vehicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VehicleCreateManyArgs>(
      args?: SelectSubset<T, VehicleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
    **/
    delete<T extends VehicleDeleteArgs>(
      args: SelectSubset<T, VehicleDeleteArgs>
    ): Prisma__VehicleClient<VehicleGetPayload<T>>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VehicleUpdateArgs>(
      args: SelectSubset<T, VehicleUpdateArgs>
    ): Prisma__VehicleClient<VehicleGetPayload<T>>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VehicleDeleteManyArgs>(
      args?: SelectSubset<T, VehicleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VehicleUpdateManyArgs>(
      args: SelectSubset<T, VehicleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
    **/
    upsert<T extends VehicleUpsertArgs>(
      args: SelectSubset<T, VehicleUpsertArgs>
    ): Prisma__VehicleClient<VehicleGetPayload<T>>

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VehicleClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    model<T extends VehicleModelArgs= {}>(args?: Subset<T, VehicleModelArgs>): Prisma__VehicleModelClient<VehicleModelGetPayload<T> | Null>;

    driver<T extends MobileUserArgs= {}>(args?: Subset<T, MobileUserArgs>): Prisma__MobileUserClient<MobileUserGetPayload<T> | Null>;

    trips<T extends VehicleTripsArgs= {}>(args?: Subset<T, VehicleTripsArgs>): PrismaPromise<Array<TripGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Vehicle base type for findUnique actions
   */
  export type VehicleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    /**
     * Filter, which Vehicle to fetch.
     * 
    **/
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUnique
   */
  export interface VehicleFindUniqueArgs extends VehicleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    /**
     * Filter, which Vehicle to fetch.
     * 
    **/
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle base type for findFirst actions
   */
  export type VehicleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    /**
     * Filter, which Vehicle to fetch.
     * 
    **/
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     * 
    **/
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     * 
    **/
    distinct?: Enumerable<VehicleScalarFieldEnum>
  }

  /**
   * Vehicle findFirst
   */
  export interface VehicleFindFirstArgs extends VehicleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    /**
     * Filter, which Vehicle to fetch.
     * 
    **/
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     * 
    **/
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     * 
    **/
    distinct?: Enumerable<VehicleScalarFieldEnum>
  }


  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    /**
     * Filter, which Vehicles to fetch.
     * 
    **/
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     * 
    **/
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VehicleScalarFieldEnum>
  }


  /**
   * Vehicle create
   */
  export type VehicleCreateArgs = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    /**
     * The data needed to create a Vehicle.
     * 
    **/
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }


  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs = {
    /**
     * The data used to create many Vehicles.
     * 
    **/
    data: Enumerable<VehicleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    /**
     * The data needed to update a Vehicle.
     * 
    **/
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     * 
    **/
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs = {
    /**
     * The data used to update Vehicles.
     * 
    **/
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     * 
    **/
    where?: VehicleWhereInput
  }


  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     * 
    **/
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     * 
    **/
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }


  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    /**
     * Filter which Vehicle to delete.
     * 
    **/
    where: VehicleWhereUniqueInput
  }


  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs = {
    /**
     * Filter which Vehicles to delete
     * 
    **/
    where?: VehicleWhereInput
  }


  /**
   * Vehicle.trips
   */
  export type VehicleTripsArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    where?: TripWhereInput
    orderBy?: Enumerable<TripOrderByWithRelationInput>
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TripScalarFieldEnum>
  }


  /**
   * Vehicle without action
   */
  export type VehicleArgs = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
  }



  /**
   * Model VehicleMake
   */


  export type AggregateVehicleMake = {
    _count: VehicleMakeCountAggregateOutputType | null
    _avg: VehicleMakeAvgAggregateOutputType | null
    _sum: VehicleMakeSumAggregateOutputType | null
    _min: VehicleMakeMinAggregateOutputType | null
    _max: VehicleMakeMaxAggregateOutputType | null
  }

  export type VehicleMakeAvgAggregateOutputType = {
    id: number | null
  }

  export type VehicleMakeSumAggregateOutputType = {
    id: number | null
  }

  export type VehicleMakeMinAggregateOutputType = {
    id: number | null
    make: string | null
  }

  export type VehicleMakeMaxAggregateOutputType = {
    id: number | null
    make: string | null
  }

  export type VehicleMakeCountAggregateOutputType = {
    id: number
    make: number
    _all: number
  }


  export type VehicleMakeAvgAggregateInputType = {
    id?: true
  }

  export type VehicleMakeSumAggregateInputType = {
    id?: true
  }

  export type VehicleMakeMinAggregateInputType = {
    id?: true
    make?: true
  }

  export type VehicleMakeMaxAggregateInputType = {
    id?: true
    make?: true
  }

  export type VehicleMakeCountAggregateInputType = {
    id?: true
    make?: true
    _all?: true
  }

  export type VehicleMakeAggregateArgs = {
    /**
     * Filter which VehicleMake to aggregate.
     * 
    **/
    where?: VehicleMakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleMakes to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleMakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VehicleMakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleMakes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleMakes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleMakes
    **/
    _count?: true | VehicleMakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleMakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleMakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMakeMaxAggregateInputType
  }

  export type GetVehicleMakeAggregateType<T extends VehicleMakeAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleMake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleMake[P]>
      : GetScalarType<T[P], AggregateVehicleMake[P]>
  }




  export type VehicleMakeGroupByArgs = {
    where?: VehicleMakeWhereInput
    orderBy?: Enumerable<VehicleMakeOrderByWithAggregationInput>
    by: Array<VehicleMakeScalarFieldEnum>
    having?: VehicleMakeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleMakeCountAggregateInputType | true
    _avg?: VehicleMakeAvgAggregateInputType
    _sum?: VehicleMakeSumAggregateInputType
    _min?: VehicleMakeMinAggregateInputType
    _max?: VehicleMakeMaxAggregateInputType
  }


  export type VehicleMakeGroupByOutputType = {
    id: number
    make: string
    _count: VehicleMakeCountAggregateOutputType | null
    _avg: VehicleMakeAvgAggregateOutputType | null
    _sum: VehicleMakeSumAggregateOutputType | null
    _min: VehicleMakeMinAggregateOutputType | null
    _max: VehicleMakeMaxAggregateOutputType | null
  }

  type GetVehicleMakeGroupByPayload<T extends VehicleMakeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VehicleMakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleMakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleMakeGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleMakeGroupByOutputType[P]>
        }
      >
    >


  export type VehicleMakeSelect = {
    id?: boolean
    make?: boolean
    models?: boolean | VehicleMakeModelsArgs
    _count?: boolean | VehicleMakeCountOutputTypeArgs
  }


  export type VehicleMakeInclude = {
    models?: boolean | VehicleMakeModelsArgs
    _count?: boolean | VehicleMakeCountOutputTypeArgs
  } 

  export type VehicleMakeGetPayload<S extends boolean | null | undefined | VehicleMakeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VehicleMake :
    S extends undefined ? never :
    S extends { include: any } & (VehicleMakeArgs | VehicleMakeFindManyArgs)
    ? VehicleMake  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'models' ? Array < VehicleModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? VehicleMakeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VehicleMakeArgs | VehicleMakeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'models' ? Array < VehicleModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? VehicleMakeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof VehicleMake ? VehicleMake[P] : never
  } 
      : VehicleMake


  type VehicleMakeCountArgs = Merge<
    Omit<VehicleMakeFindManyArgs, 'select' | 'include'> & {
      select?: VehicleMakeCountAggregateInputType | true
    }
  >

  export interface VehicleMakeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one VehicleMake that matches the filter.
     * @param {VehicleMakeFindUniqueArgs} args - Arguments to find a VehicleMake
     * @example
     * // Get one VehicleMake
     * const vehicleMake = await prisma.vehicleMake.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VehicleMakeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VehicleMakeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VehicleMake'> extends True ? Prisma__VehicleMakeClient<VehicleMakeGetPayload<T>> : Prisma__VehicleMakeClient<VehicleMakeGetPayload<T> | null, null>

    /**
     * Find one VehicleMake that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VehicleMakeFindUniqueOrThrowArgs} args - Arguments to find a VehicleMake
     * @example
     * // Get one VehicleMake
     * const vehicleMake = await prisma.vehicleMake.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VehicleMakeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VehicleMakeFindUniqueOrThrowArgs>
    ): Prisma__VehicleMakeClient<VehicleMakeGetPayload<T>>

    /**
     * Find the first VehicleMake that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMakeFindFirstArgs} args - Arguments to find a VehicleMake
     * @example
     * // Get one VehicleMake
     * const vehicleMake = await prisma.vehicleMake.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VehicleMakeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VehicleMakeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VehicleMake'> extends True ? Prisma__VehicleMakeClient<VehicleMakeGetPayload<T>> : Prisma__VehicleMakeClient<VehicleMakeGetPayload<T> | null, null>

    /**
     * Find the first VehicleMake that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMakeFindFirstOrThrowArgs} args - Arguments to find a VehicleMake
     * @example
     * // Get one VehicleMake
     * const vehicleMake = await prisma.vehicleMake.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VehicleMakeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VehicleMakeFindFirstOrThrowArgs>
    ): Prisma__VehicleMakeClient<VehicleMakeGetPayload<T>>

    /**
     * Find zero or more VehicleMakes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMakeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleMakes
     * const vehicleMakes = await prisma.vehicleMake.findMany()
     * 
     * // Get first 10 VehicleMakes
     * const vehicleMakes = await prisma.vehicleMake.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleMakeWithIdOnly = await prisma.vehicleMake.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VehicleMakeFindManyArgs>(
      args?: SelectSubset<T, VehicleMakeFindManyArgs>
    ): PrismaPromise<Array<VehicleMakeGetPayload<T>>>

    /**
     * Create a VehicleMake.
     * @param {VehicleMakeCreateArgs} args - Arguments to create a VehicleMake.
     * @example
     * // Create one VehicleMake
     * const VehicleMake = await prisma.vehicleMake.create({
     *   data: {
     *     // ... data to create a VehicleMake
     *   }
     * })
     * 
    **/
    create<T extends VehicleMakeCreateArgs>(
      args: SelectSubset<T, VehicleMakeCreateArgs>
    ): Prisma__VehicleMakeClient<VehicleMakeGetPayload<T>>

    /**
     * Create many VehicleMakes.
     *     @param {VehicleMakeCreateManyArgs} args - Arguments to create many VehicleMakes.
     *     @example
     *     // Create many VehicleMakes
     *     const vehicleMake = await prisma.vehicleMake.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VehicleMakeCreateManyArgs>(
      args?: SelectSubset<T, VehicleMakeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VehicleMake.
     * @param {VehicleMakeDeleteArgs} args - Arguments to delete one VehicleMake.
     * @example
     * // Delete one VehicleMake
     * const VehicleMake = await prisma.vehicleMake.delete({
     *   where: {
     *     // ... filter to delete one VehicleMake
     *   }
     * })
     * 
    **/
    delete<T extends VehicleMakeDeleteArgs>(
      args: SelectSubset<T, VehicleMakeDeleteArgs>
    ): Prisma__VehicleMakeClient<VehicleMakeGetPayload<T>>

    /**
     * Update one VehicleMake.
     * @param {VehicleMakeUpdateArgs} args - Arguments to update one VehicleMake.
     * @example
     * // Update one VehicleMake
     * const vehicleMake = await prisma.vehicleMake.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VehicleMakeUpdateArgs>(
      args: SelectSubset<T, VehicleMakeUpdateArgs>
    ): Prisma__VehicleMakeClient<VehicleMakeGetPayload<T>>

    /**
     * Delete zero or more VehicleMakes.
     * @param {VehicleMakeDeleteManyArgs} args - Arguments to filter VehicleMakes to delete.
     * @example
     * // Delete a few VehicleMakes
     * const { count } = await prisma.vehicleMake.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VehicleMakeDeleteManyArgs>(
      args?: SelectSubset<T, VehicleMakeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleMakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleMakes
     * const vehicleMake = await prisma.vehicleMake.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VehicleMakeUpdateManyArgs>(
      args: SelectSubset<T, VehicleMakeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleMake.
     * @param {VehicleMakeUpsertArgs} args - Arguments to update or create a VehicleMake.
     * @example
     * // Update or create a VehicleMake
     * const vehicleMake = await prisma.vehicleMake.upsert({
     *   create: {
     *     // ... data to create a VehicleMake
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleMake we want to update
     *   }
     * })
    **/
    upsert<T extends VehicleMakeUpsertArgs>(
      args: SelectSubset<T, VehicleMakeUpsertArgs>
    ): Prisma__VehicleMakeClient<VehicleMakeGetPayload<T>>

    /**
     * Count the number of VehicleMakes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMakeCountArgs} args - Arguments to filter VehicleMakes to count.
     * @example
     * // Count the number of VehicleMakes
     * const count = await prisma.vehicleMake.count({
     *   where: {
     *     // ... the filter for the VehicleMakes we want to count
     *   }
     * })
    **/
    count<T extends VehicleMakeCountArgs>(
      args?: Subset<T, VehicleMakeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleMakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleMake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleMakeAggregateArgs>(args: Subset<T, VehicleMakeAggregateArgs>): PrismaPromise<GetVehicleMakeAggregateType<T>>

    /**
     * Group by VehicleMake.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleMakeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleMakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleMakeGroupByArgs['orderBy'] }
        : { orderBy?: VehicleMakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleMakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleMakeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleMake.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VehicleMakeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    models<T extends VehicleMakeModelsArgs= {}>(args?: Subset<T, VehicleMakeModelsArgs>): PrismaPromise<Array<VehicleModelGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VehicleMake base type for findUnique actions
   */
  export type VehicleMakeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VehicleMake
     * 
    **/
    select?: VehicleMakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleMakeInclude | null
    /**
     * Filter, which VehicleMake to fetch.
     * 
    **/
    where: VehicleMakeWhereUniqueInput
  }

  /**
   * VehicleMake findUnique
   */
  export interface VehicleMakeFindUniqueArgs extends VehicleMakeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VehicleMake findUniqueOrThrow
   */
  export type VehicleMakeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VehicleMake
     * 
    **/
    select?: VehicleMakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleMakeInclude | null
    /**
     * Filter, which VehicleMake to fetch.
     * 
    **/
    where: VehicleMakeWhereUniqueInput
  }


  /**
   * VehicleMake base type for findFirst actions
   */
  export type VehicleMakeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VehicleMake
     * 
    **/
    select?: VehicleMakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleMakeInclude | null
    /**
     * Filter, which VehicleMake to fetch.
     * 
    **/
    where?: VehicleMakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleMakes to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleMakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleMakes.
     * 
    **/
    cursor?: VehicleMakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleMakes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleMakes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleMakes.
     * 
    **/
    distinct?: Enumerable<VehicleMakeScalarFieldEnum>
  }

  /**
   * VehicleMake findFirst
   */
  export interface VehicleMakeFindFirstArgs extends VehicleMakeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VehicleMake findFirstOrThrow
   */
  export type VehicleMakeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VehicleMake
     * 
    **/
    select?: VehicleMakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleMakeInclude | null
    /**
     * Filter, which VehicleMake to fetch.
     * 
    **/
    where?: VehicleMakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleMakes to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleMakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleMakes.
     * 
    **/
    cursor?: VehicleMakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleMakes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleMakes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleMakes.
     * 
    **/
    distinct?: Enumerable<VehicleMakeScalarFieldEnum>
  }


  /**
   * VehicleMake findMany
   */
  export type VehicleMakeFindManyArgs = {
    /**
     * Select specific fields to fetch from the VehicleMake
     * 
    **/
    select?: VehicleMakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleMakeInclude | null
    /**
     * Filter, which VehicleMakes to fetch.
     * 
    **/
    where?: VehicleMakeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleMakes to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleMakeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleMakes.
     * 
    **/
    cursor?: VehicleMakeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleMakes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleMakes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VehicleMakeScalarFieldEnum>
  }


  /**
   * VehicleMake create
   */
  export type VehicleMakeCreateArgs = {
    /**
     * Select specific fields to fetch from the VehicleMake
     * 
    **/
    select?: VehicleMakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleMakeInclude | null
    /**
     * The data needed to create a VehicleMake.
     * 
    **/
    data: XOR<VehicleMakeCreateInput, VehicleMakeUncheckedCreateInput>
  }


  /**
   * VehicleMake createMany
   */
  export type VehicleMakeCreateManyArgs = {
    /**
     * The data used to create many VehicleMakes.
     * 
    **/
    data: Enumerable<VehicleMakeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VehicleMake update
   */
  export type VehicleMakeUpdateArgs = {
    /**
     * Select specific fields to fetch from the VehicleMake
     * 
    **/
    select?: VehicleMakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleMakeInclude | null
    /**
     * The data needed to update a VehicleMake.
     * 
    **/
    data: XOR<VehicleMakeUpdateInput, VehicleMakeUncheckedUpdateInput>
    /**
     * Choose, which VehicleMake to update.
     * 
    **/
    where: VehicleMakeWhereUniqueInput
  }


  /**
   * VehicleMake updateMany
   */
  export type VehicleMakeUpdateManyArgs = {
    /**
     * The data used to update VehicleMakes.
     * 
    **/
    data: XOR<VehicleMakeUpdateManyMutationInput, VehicleMakeUncheckedUpdateManyInput>
    /**
     * Filter which VehicleMakes to update
     * 
    **/
    where?: VehicleMakeWhereInput
  }


  /**
   * VehicleMake upsert
   */
  export type VehicleMakeUpsertArgs = {
    /**
     * Select specific fields to fetch from the VehicleMake
     * 
    **/
    select?: VehicleMakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleMakeInclude | null
    /**
     * The filter to search for the VehicleMake to update in case it exists.
     * 
    **/
    where: VehicleMakeWhereUniqueInput
    /**
     * In case the VehicleMake found by the `where` argument doesn't exist, create a new VehicleMake with this data.
     * 
    **/
    create: XOR<VehicleMakeCreateInput, VehicleMakeUncheckedCreateInput>
    /**
     * In case the VehicleMake was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VehicleMakeUpdateInput, VehicleMakeUncheckedUpdateInput>
  }


  /**
   * VehicleMake delete
   */
  export type VehicleMakeDeleteArgs = {
    /**
     * Select specific fields to fetch from the VehicleMake
     * 
    **/
    select?: VehicleMakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleMakeInclude | null
    /**
     * Filter which VehicleMake to delete.
     * 
    **/
    where: VehicleMakeWhereUniqueInput
  }


  /**
   * VehicleMake deleteMany
   */
  export type VehicleMakeDeleteManyArgs = {
    /**
     * Filter which VehicleMakes to delete
     * 
    **/
    where?: VehicleMakeWhereInput
  }


  /**
   * VehicleMake.models
   */
  export type VehicleMakeModelsArgs = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    where?: VehicleModelWhereInput
    orderBy?: Enumerable<VehicleModelOrderByWithRelationInput>
    cursor?: VehicleModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VehicleModelScalarFieldEnum>
  }


  /**
   * VehicleMake without action
   */
  export type VehicleMakeArgs = {
    /**
     * Select specific fields to fetch from the VehicleMake
     * 
    **/
    select?: VehicleMakeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleMakeInclude | null
  }



  /**
   * Model VehicleType
   */


  export type AggregateVehicleType = {
    _count: VehicleTypeCountAggregateOutputType | null
    _avg: VehicleTypeAvgAggregateOutputType | null
    _sum: VehicleTypeSumAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  export type VehicleTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type VehicleTypeSumAggregateOutputType = {
    id: number | null
  }

  export type VehicleTypeMinAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type VehicleTypeMaxAggregateOutputType = {
    id: number | null
    type: string | null
  }

  export type VehicleTypeCountAggregateOutputType = {
    id: number
    type: number
    _all: number
  }


  export type VehicleTypeAvgAggregateInputType = {
    id?: true
  }

  export type VehicleTypeSumAggregateInputType = {
    id?: true
  }

  export type VehicleTypeMinAggregateInputType = {
    id?: true
    type?: true
  }

  export type VehicleTypeMaxAggregateInputType = {
    id?: true
    type?: true
  }

  export type VehicleTypeCountAggregateInputType = {
    id?: true
    type?: true
    _all?: true
  }

  export type VehicleTypeAggregateArgs = {
    /**
     * Filter which VehicleType to aggregate.
     * 
    **/
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleTypes
    **/
    _count?: true | VehicleTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleTypeMaxAggregateInputType
  }

  export type GetVehicleTypeAggregateType<T extends VehicleTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleType[P]>
      : GetScalarType<T[P], AggregateVehicleType[P]>
  }




  export type VehicleTypeGroupByArgs = {
    where?: VehicleTypeWhereInput
    orderBy?: Enumerable<VehicleTypeOrderByWithAggregationInput>
    by: Array<VehicleTypeScalarFieldEnum>
    having?: VehicleTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleTypeCountAggregateInputType | true
    _avg?: VehicleTypeAvgAggregateInputType
    _sum?: VehicleTypeSumAggregateInputType
    _min?: VehicleTypeMinAggregateInputType
    _max?: VehicleTypeMaxAggregateInputType
  }


  export type VehicleTypeGroupByOutputType = {
    id: number
    type: string
    _count: VehicleTypeCountAggregateOutputType | null
    _avg: VehicleTypeAvgAggregateOutputType | null
    _sum: VehicleTypeSumAggregateOutputType | null
    _min: VehicleTypeMinAggregateOutputType | null
    _max: VehicleTypeMaxAggregateOutputType | null
  }

  type GetVehicleTypeGroupByPayload<T extends VehicleTypeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VehicleTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleTypeGroupByOutputType[P]>
        }
      >
    >


  export type VehicleTypeSelect = {
    id?: boolean
    type?: boolean
    models?: boolean | VehicleTypeModelsArgs
    _count?: boolean | VehicleTypeCountOutputTypeArgs
  }


  export type VehicleTypeInclude = {
    models?: boolean | VehicleTypeModelsArgs
    _count?: boolean | VehicleTypeCountOutputTypeArgs
  } 

  export type VehicleTypeGetPayload<S extends boolean | null | undefined | VehicleTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VehicleType :
    S extends undefined ? never :
    S extends { include: any } & (VehicleTypeArgs | VehicleTypeFindManyArgs)
    ? VehicleType  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'models' ? Array < VehicleModelGetPayload<S['include'][P]>>  :
        P extends '_count' ? VehicleTypeCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VehicleTypeArgs | VehicleTypeFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'models' ? Array < VehicleModelGetPayload<S['select'][P]>>  :
        P extends '_count' ? VehicleTypeCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof VehicleType ? VehicleType[P] : never
  } 
      : VehicleType


  type VehicleTypeCountArgs = Merge<
    Omit<VehicleTypeFindManyArgs, 'select' | 'include'> & {
      select?: VehicleTypeCountAggregateInputType | true
    }
  >

  export interface VehicleTypeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one VehicleType that matches the filter.
     * @param {VehicleTypeFindUniqueArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VehicleTypeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VehicleTypeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VehicleType'> extends True ? Prisma__VehicleTypeClient<VehicleTypeGetPayload<T>> : Prisma__VehicleTypeClient<VehicleTypeGetPayload<T> | null, null>

    /**
     * Find one VehicleType that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VehicleTypeFindUniqueOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VehicleTypeFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VehicleTypeFindUniqueOrThrowArgs>
    ): Prisma__VehicleTypeClient<VehicleTypeGetPayload<T>>

    /**
     * Find the first VehicleType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VehicleTypeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VehicleTypeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VehicleType'> extends True ? Prisma__VehicleTypeClient<VehicleTypeGetPayload<T>> : Prisma__VehicleTypeClient<VehicleTypeGetPayload<T> | null, null>

    /**
     * Find the first VehicleType that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindFirstOrThrowArgs} args - Arguments to find a VehicleType
     * @example
     * // Get one VehicleType
     * const vehicleType = await prisma.vehicleType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VehicleTypeFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VehicleTypeFindFirstOrThrowArgs>
    ): Prisma__VehicleTypeClient<VehicleTypeGetPayload<T>>

    /**
     * Find zero or more VehicleTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany()
     * 
     * // Get first 10 VehicleTypes
     * const vehicleTypes = await prisma.vehicleType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleTypeWithIdOnly = await prisma.vehicleType.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VehicleTypeFindManyArgs>(
      args?: SelectSubset<T, VehicleTypeFindManyArgs>
    ): PrismaPromise<Array<VehicleTypeGetPayload<T>>>

    /**
     * Create a VehicleType.
     * @param {VehicleTypeCreateArgs} args - Arguments to create a VehicleType.
     * @example
     * // Create one VehicleType
     * const VehicleType = await prisma.vehicleType.create({
     *   data: {
     *     // ... data to create a VehicleType
     *   }
     * })
     * 
    **/
    create<T extends VehicleTypeCreateArgs>(
      args: SelectSubset<T, VehicleTypeCreateArgs>
    ): Prisma__VehicleTypeClient<VehicleTypeGetPayload<T>>

    /**
     * Create many VehicleTypes.
     *     @param {VehicleTypeCreateManyArgs} args - Arguments to create many VehicleTypes.
     *     @example
     *     // Create many VehicleTypes
     *     const vehicleType = await prisma.vehicleType.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VehicleTypeCreateManyArgs>(
      args?: SelectSubset<T, VehicleTypeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VehicleType.
     * @param {VehicleTypeDeleteArgs} args - Arguments to delete one VehicleType.
     * @example
     * // Delete one VehicleType
     * const VehicleType = await prisma.vehicleType.delete({
     *   where: {
     *     // ... filter to delete one VehicleType
     *   }
     * })
     * 
    **/
    delete<T extends VehicleTypeDeleteArgs>(
      args: SelectSubset<T, VehicleTypeDeleteArgs>
    ): Prisma__VehicleTypeClient<VehicleTypeGetPayload<T>>

    /**
     * Update one VehicleType.
     * @param {VehicleTypeUpdateArgs} args - Arguments to update one VehicleType.
     * @example
     * // Update one VehicleType
     * const vehicleType = await prisma.vehicleType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VehicleTypeUpdateArgs>(
      args: SelectSubset<T, VehicleTypeUpdateArgs>
    ): Prisma__VehicleTypeClient<VehicleTypeGetPayload<T>>

    /**
     * Delete zero or more VehicleTypes.
     * @param {VehicleTypeDeleteManyArgs} args - Arguments to filter VehicleTypes to delete.
     * @example
     * // Delete a few VehicleTypes
     * const { count } = await prisma.vehicleType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VehicleTypeDeleteManyArgs>(
      args?: SelectSubset<T, VehicleTypeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleTypes
     * const vehicleType = await prisma.vehicleType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VehicleTypeUpdateManyArgs>(
      args: SelectSubset<T, VehicleTypeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleType.
     * @param {VehicleTypeUpsertArgs} args - Arguments to update or create a VehicleType.
     * @example
     * // Update or create a VehicleType
     * const vehicleType = await prisma.vehicleType.upsert({
     *   create: {
     *     // ... data to create a VehicleType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleType we want to update
     *   }
     * })
    **/
    upsert<T extends VehicleTypeUpsertArgs>(
      args: SelectSubset<T, VehicleTypeUpsertArgs>
    ): Prisma__VehicleTypeClient<VehicleTypeGetPayload<T>>

    /**
     * Count the number of VehicleTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeCountArgs} args - Arguments to filter VehicleTypes to count.
     * @example
     * // Count the number of VehicleTypes
     * const count = await prisma.vehicleType.count({
     *   where: {
     *     // ... the filter for the VehicleTypes we want to count
     *   }
     * })
    **/
    count<T extends VehicleTypeCountArgs>(
      args?: Subset<T, VehicleTypeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleTypeAggregateArgs>(args: Subset<T, VehicleTypeAggregateArgs>): PrismaPromise<GetVehicleTypeAggregateType<T>>

    /**
     * Group by VehicleType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleTypeGroupByArgs['orderBy'] }
        : { orderBy?: VehicleTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleTypeGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VehicleTypeClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    models<T extends VehicleTypeModelsArgs= {}>(args?: Subset<T, VehicleTypeModelsArgs>): PrismaPromise<Array<VehicleModelGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VehicleType base type for findUnique actions
   */
  export type VehicleTypeFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VehicleType
     * 
    **/
    select?: VehicleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleTypeInclude | null
    /**
     * Filter, which VehicleType to fetch.
     * 
    **/
    where: VehicleTypeWhereUniqueInput
  }

  /**
   * VehicleType findUnique
   */
  export interface VehicleTypeFindUniqueArgs extends VehicleTypeFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VehicleType findUniqueOrThrow
   */
  export type VehicleTypeFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VehicleType
     * 
    **/
    select?: VehicleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleTypeInclude | null
    /**
     * Filter, which VehicleType to fetch.
     * 
    **/
    where: VehicleTypeWhereUniqueInput
  }


  /**
   * VehicleType base type for findFirst actions
   */
  export type VehicleTypeFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VehicleType
     * 
    **/
    select?: VehicleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleTypeInclude | null
    /**
     * Filter, which VehicleType to fetch.
     * 
    **/
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     * 
    **/
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     * 
    **/
    distinct?: Enumerable<VehicleTypeScalarFieldEnum>
  }

  /**
   * VehicleType findFirst
   */
  export interface VehicleTypeFindFirstArgs extends VehicleTypeFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VehicleType findFirstOrThrow
   */
  export type VehicleTypeFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VehicleType
     * 
    **/
    select?: VehicleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleTypeInclude | null
    /**
     * Filter, which VehicleType to fetch.
     * 
    **/
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleTypes.
     * 
    **/
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleTypes.
     * 
    **/
    distinct?: Enumerable<VehicleTypeScalarFieldEnum>
  }


  /**
   * VehicleType findMany
   */
  export type VehicleTypeFindManyArgs = {
    /**
     * Select specific fields to fetch from the VehicleType
     * 
    **/
    select?: VehicleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleTypeInclude | null
    /**
     * Filter, which VehicleTypes to fetch.
     * 
    **/
    where?: VehicleTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleTypes to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleTypeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleTypes.
     * 
    **/
    cursor?: VehicleTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleTypes from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleTypes.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VehicleTypeScalarFieldEnum>
  }


  /**
   * VehicleType create
   */
  export type VehicleTypeCreateArgs = {
    /**
     * Select specific fields to fetch from the VehicleType
     * 
    **/
    select?: VehicleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleTypeInclude | null
    /**
     * The data needed to create a VehicleType.
     * 
    **/
    data: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
  }


  /**
   * VehicleType createMany
   */
  export type VehicleTypeCreateManyArgs = {
    /**
     * The data used to create many VehicleTypes.
     * 
    **/
    data: Enumerable<VehicleTypeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VehicleType update
   */
  export type VehicleTypeUpdateArgs = {
    /**
     * Select specific fields to fetch from the VehicleType
     * 
    **/
    select?: VehicleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleTypeInclude | null
    /**
     * The data needed to update a VehicleType.
     * 
    **/
    data: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
    /**
     * Choose, which VehicleType to update.
     * 
    **/
    where: VehicleTypeWhereUniqueInput
  }


  /**
   * VehicleType updateMany
   */
  export type VehicleTypeUpdateManyArgs = {
    /**
     * The data used to update VehicleTypes.
     * 
    **/
    data: XOR<VehicleTypeUpdateManyMutationInput, VehicleTypeUncheckedUpdateManyInput>
    /**
     * Filter which VehicleTypes to update
     * 
    **/
    where?: VehicleTypeWhereInput
  }


  /**
   * VehicleType upsert
   */
  export type VehicleTypeUpsertArgs = {
    /**
     * Select specific fields to fetch from the VehicleType
     * 
    **/
    select?: VehicleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleTypeInclude | null
    /**
     * The filter to search for the VehicleType to update in case it exists.
     * 
    **/
    where: VehicleTypeWhereUniqueInput
    /**
     * In case the VehicleType found by the `where` argument doesn't exist, create a new VehicleType with this data.
     * 
    **/
    create: XOR<VehicleTypeCreateInput, VehicleTypeUncheckedCreateInput>
    /**
     * In case the VehicleType was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VehicleTypeUpdateInput, VehicleTypeUncheckedUpdateInput>
  }


  /**
   * VehicleType delete
   */
  export type VehicleTypeDeleteArgs = {
    /**
     * Select specific fields to fetch from the VehicleType
     * 
    **/
    select?: VehicleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleTypeInclude | null
    /**
     * Filter which VehicleType to delete.
     * 
    **/
    where: VehicleTypeWhereUniqueInput
  }


  /**
   * VehicleType deleteMany
   */
  export type VehicleTypeDeleteManyArgs = {
    /**
     * Filter which VehicleTypes to delete
     * 
    **/
    where?: VehicleTypeWhereInput
  }


  /**
   * VehicleType.models
   */
  export type VehicleTypeModelsArgs = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    where?: VehicleModelWhereInput
    orderBy?: Enumerable<VehicleModelOrderByWithRelationInput>
    cursor?: VehicleModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VehicleModelScalarFieldEnum>
  }


  /**
   * VehicleType without action
   */
  export type VehicleTypeArgs = {
    /**
     * Select specific fields to fetch from the VehicleType
     * 
    **/
    select?: VehicleTypeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleTypeInclude | null
  }



  /**
   * Model VehicleModel
   */


  export type AggregateVehicleModel = {
    _count: VehicleModelCountAggregateOutputType | null
    _avg: VehicleModelAvgAggregateOutputType | null
    _sum: VehicleModelSumAggregateOutputType | null
    _min: VehicleModelMinAggregateOutputType | null
    _max: VehicleModelMaxAggregateOutputType | null
  }

  export type VehicleModelAvgAggregateOutputType = {
    id: number | null
    makeId: number | null
    typeId: number | null
  }

  export type VehicleModelSumAggregateOutputType = {
    id: number | null
    makeId: number | null
    typeId: number | null
  }

  export type VehicleModelMinAggregateOutputType = {
    id: number | null
    model: string | null
    makeId: number | null
    typeId: number | null
  }

  export type VehicleModelMaxAggregateOutputType = {
    id: number | null
    model: string | null
    makeId: number | null
    typeId: number | null
  }

  export type VehicleModelCountAggregateOutputType = {
    id: number
    model: number
    makeId: number
    typeId: number
    _all: number
  }


  export type VehicleModelAvgAggregateInputType = {
    id?: true
    makeId?: true
    typeId?: true
  }

  export type VehicleModelSumAggregateInputType = {
    id?: true
    makeId?: true
    typeId?: true
  }

  export type VehicleModelMinAggregateInputType = {
    id?: true
    model?: true
    makeId?: true
    typeId?: true
  }

  export type VehicleModelMaxAggregateInputType = {
    id?: true
    model?: true
    makeId?: true
    typeId?: true
  }

  export type VehicleModelCountAggregateInputType = {
    id?: true
    model?: true
    makeId?: true
    typeId?: true
    _all?: true
  }

  export type VehicleModelAggregateArgs = {
    /**
     * Filter which VehicleModel to aggregate.
     * 
    **/
    where?: VehicleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleModels to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VehicleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VehicleModels
    **/
    _count?: true | VehicleModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleModelMaxAggregateInputType
  }

  export type GetVehicleModelAggregateType<T extends VehicleModelAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicleModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicleModel[P]>
      : GetScalarType<T[P], AggregateVehicleModel[P]>
  }




  export type VehicleModelGroupByArgs = {
    where?: VehicleModelWhereInput
    orderBy?: Enumerable<VehicleModelOrderByWithAggregationInput>
    by: Array<VehicleModelScalarFieldEnum>
    having?: VehicleModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleModelCountAggregateInputType | true
    _avg?: VehicleModelAvgAggregateInputType
    _sum?: VehicleModelSumAggregateInputType
    _min?: VehicleModelMinAggregateInputType
    _max?: VehicleModelMaxAggregateInputType
  }


  export type VehicleModelGroupByOutputType = {
    id: number
    model: string
    makeId: number
    typeId: number
    _count: VehicleModelCountAggregateOutputType | null
    _avg: VehicleModelAvgAggregateOutputType | null
    _sum: VehicleModelSumAggregateOutputType | null
    _min: VehicleModelMinAggregateOutputType | null
    _max: VehicleModelMaxAggregateOutputType | null
  }

  type GetVehicleModelGroupByPayload<T extends VehicleModelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VehicleModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleModelGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleModelGroupByOutputType[P]>
        }
      >
    >


  export type VehicleModelSelect = {
    id?: boolean
    model?: boolean
    make?: boolean | VehicleMakeArgs
    makeId?: boolean
    vehicles?: boolean | VehicleModelVehiclesArgs
    type?: boolean | VehicleTypeArgs
    typeId?: boolean
    _count?: boolean | VehicleModelCountOutputTypeArgs
  }


  export type VehicleModelInclude = {
    make?: boolean | VehicleMakeArgs
    vehicles?: boolean | VehicleModelVehiclesArgs
    type?: boolean | VehicleTypeArgs
    _count?: boolean | VehicleModelCountOutputTypeArgs
  } 

  export type VehicleModelGetPayload<S extends boolean | null | undefined | VehicleModelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VehicleModel :
    S extends undefined ? never :
    S extends { include: any } & (VehicleModelArgs | VehicleModelFindManyArgs)
    ? VehicleModel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'make' ? VehicleMakeGetPayload<S['include'][P]> :
        P extends 'vehicles' ? Array < VehicleGetPayload<S['include'][P]>>  :
        P extends 'type' ? VehicleTypeGetPayload<S['include'][P]> :
        P extends '_count' ? VehicleModelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VehicleModelArgs | VehicleModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'make' ? VehicleMakeGetPayload<S['select'][P]> :
        P extends 'vehicles' ? Array < VehicleGetPayload<S['select'][P]>>  :
        P extends 'type' ? VehicleTypeGetPayload<S['select'][P]> :
        P extends '_count' ? VehicleModelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof VehicleModel ? VehicleModel[P] : never
  } 
      : VehicleModel


  type VehicleModelCountArgs = Merge<
    Omit<VehicleModelFindManyArgs, 'select' | 'include'> & {
      select?: VehicleModelCountAggregateInputType | true
    }
  >

  export interface VehicleModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one VehicleModel that matches the filter.
     * @param {VehicleModelFindUniqueArgs} args - Arguments to find a VehicleModel
     * @example
     * // Get one VehicleModel
     * const vehicleModel = await prisma.vehicleModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VehicleModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VehicleModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VehicleModel'> extends True ? Prisma__VehicleModelClient<VehicleModelGetPayload<T>> : Prisma__VehicleModelClient<VehicleModelGetPayload<T> | null, null>

    /**
     * Find one VehicleModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VehicleModelFindUniqueOrThrowArgs} args - Arguments to find a VehicleModel
     * @example
     * // Get one VehicleModel
     * const vehicleModel = await prisma.vehicleModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VehicleModelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VehicleModelFindUniqueOrThrowArgs>
    ): Prisma__VehicleModelClient<VehicleModelGetPayload<T>>

    /**
     * Find the first VehicleModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelFindFirstArgs} args - Arguments to find a VehicleModel
     * @example
     * // Get one VehicleModel
     * const vehicleModel = await prisma.vehicleModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VehicleModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VehicleModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VehicleModel'> extends True ? Prisma__VehicleModelClient<VehicleModelGetPayload<T>> : Prisma__VehicleModelClient<VehicleModelGetPayload<T> | null, null>

    /**
     * Find the first VehicleModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelFindFirstOrThrowArgs} args - Arguments to find a VehicleModel
     * @example
     * // Get one VehicleModel
     * const vehicleModel = await prisma.vehicleModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VehicleModelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VehicleModelFindFirstOrThrowArgs>
    ): Prisma__VehicleModelClient<VehicleModelGetPayload<T>>

    /**
     * Find zero or more VehicleModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VehicleModels
     * const vehicleModels = await prisma.vehicleModel.findMany()
     * 
     * // Get first 10 VehicleModels
     * const vehicleModels = await prisma.vehicleModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleModelWithIdOnly = await prisma.vehicleModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VehicleModelFindManyArgs>(
      args?: SelectSubset<T, VehicleModelFindManyArgs>
    ): PrismaPromise<Array<VehicleModelGetPayload<T>>>

    /**
     * Create a VehicleModel.
     * @param {VehicleModelCreateArgs} args - Arguments to create a VehicleModel.
     * @example
     * // Create one VehicleModel
     * const VehicleModel = await prisma.vehicleModel.create({
     *   data: {
     *     // ... data to create a VehicleModel
     *   }
     * })
     * 
    **/
    create<T extends VehicleModelCreateArgs>(
      args: SelectSubset<T, VehicleModelCreateArgs>
    ): Prisma__VehicleModelClient<VehicleModelGetPayload<T>>

    /**
     * Create many VehicleModels.
     *     @param {VehicleModelCreateManyArgs} args - Arguments to create many VehicleModels.
     *     @example
     *     // Create many VehicleModels
     *     const vehicleModel = await prisma.vehicleModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VehicleModelCreateManyArgs>(
      args?: SelectSubset<T, VehicleModelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VehicleModel.
     * @param {VehicleModelDeleteArgs} args - Arguments to delete one VehicleModel.
     * @example
     * // Delete one VehicleModel
     * const VehicleModel = await prisma.vehicleModel.delete({
     *   where: {
     *     // ... filter to delete one VehicleModel
     *   }
     * })
     * 
    **/
    delete<T extends VehicleModelDeleteArgs>(
      args: SelectSubset<T, VehicleModelDeleteArgs>
    ): Prisma__VehicleModelClient<VehicleModelGetPayload<T>>

    /**
     * Update one VehicleModel.
     * @param {VehicleModelUpdateArgs} args - Arguments to update one VehicleModel.
     * @example
     * // Update one VehicleModel
     * const vehicleModel = await prisma.vehicleModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VehicleModelUpdateArgs>(
      args: SelectSubset<T, VehicleModelUpdateArgs>
    ): Prisma__VehicleModelClient<VehicleModelGetPayload<T>>

    /**
     * Delete zero or more VehicleModels.
     * @param {VehicleModelDeleteManyArgs} args - Arguments to filter VehicleModels to delete.
     * @example
     * // Delete a few VehicleModels
     * const { count } = await prisma.vehicleModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VehicleModelDeleteManyArgs>(
      args?: SelectSubset<T, VehicleModelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VehicleModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VehicleModels
     * const vehicleModel = await prisma.vehicleModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VehicleModelUpdateManyArgs>(
      args: SelectSubset<T, VehicleModelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VehicleModel.
     * @param {VehicleModelUpsertArgs} args - Arguments to update or create a VehicleModel.
     * @example
     * // Update or create a VehicleModel
     * const vehicleModel = await prisma.vehicleModel.upsert({
     *   create: {
     *     // ... data to create a VehicleModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VehicleModel we want to update
     *   }
     * })
    **/
    upsert<T extends VehicleModelUpsertArgs>(
      args: SelectSubset<T, VehicleModelUpsertArgs>
    ): Prisma__VehicleModelClient<VehicleModelGetPayload<T>>

    /**
     * Count the number of VehicleModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelCountArgs} args - Arguments to filter VehicleModels to count.
     * @example
     * // Count the number of VehicleModels
     * const count = await prisma.vehicleModel.count({
     *   where: {
     *     // ... the filter for the VehicleModels we want to count
     *   }
     * })
    **/
    count<T extends VehicleModelCountArgs>(
      args?: Subset<T, VehicleModelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VehicleModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehicleModelAggregateArgs>(args: Subset<T, VehicleModelAggregateArgs>): PrismaPromise<GetVehicleModelAggregateType<T>>

    /**
     * Group by VehicleModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehicleModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleModelGroupByArgs['orderBy'] }
        : { orderBy?: VehicleModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehicleModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleModelGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VehicleModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VehicleModelClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    make<T extends VehicleMakeArgs= {}>(args?: Subset<T, VehicleMakeArgs>): Prisma__VehicleMakeClient<VehicleMakeGetPayload<T> | Null>;

    vehicles<T extends VehicleModelVehiclesArgs= {}>(args?: Subset<T, VehicleModelVehiclesArgs>): PrismaPromise<Array<VehicleGetPayload<T>>| Null>;

    type<T extends VehicleTypeArgs= {}>(args?: Subset<T, VehicleTypeArgs>): Prisma__VehicleTypeClient<VehicleTypeGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VehicleModel base type for findUnique actions
   */
  export type VehicleModelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    /**
     * Filter, which VehicleModel to fetch.
     * 
    **/
    where: VehicleModelWhereUniqueInput
  }

  /**
   * VehicleModel findUnique
   */
  export interface VehicleModelFindUniqueArgs extends VehicleModelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VehicleModel findUniqueOrThrow
   */
  export type VehicleModelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    /**
     * Filter, which VehicleModel to fetch.
     * 
    **/
    where: VehicleModelWhereUniqueInput
  }


  /**
   * VehicleModel base type for findFirst actions
   */
  export type VehicleModelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    /**
     * Filter, which VehicleModel to fetch.
     * 
    **/
    where?: VehicleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleModels to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleModels.
     * 
    **/
    cursor?: VehicleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleModels.
     * 
    **/
    distinct?: Enumerable<VehicleModelScalarFieldEnum>
  }

  /**
   * VehicleModel findFirst
   */
  export interface VehicleModelFindFirstArgs extends VehicleModelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VehicleModel findFirstOrThrow
   */
  export type VehicleModelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    /**
     * Filter, which VehicleModel to fetch.
     * 
    **/
    where?: VehicleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleModels to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VehicleModels.
     * 
    **/
    cursor?: VehicleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VehicleModels.
     * 
    **/
    distinct?: Enumerable<VehicleModelScalarFieldEnum>
  }


  /**
   * VehicleModel findMany
   */
  export type VehicleModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    /**
     * Filter, which VehicleModels to fetch.
     * 
    **/
    where?: VehicleModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VehicleModels to fetch.
     * 
    **/
    orderBy?: Enumerable<VehicleModelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VehicleModels.
     * 
    **/
    cursor?: VehicleModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VehicleModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VehicleModels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VehicleModelScalarFieldEnum>
  }


  /**
   * VehicleModel create
   */
  export type VehicleModelCreateArgs = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    /**
     * The data needed to create a VehicleModel.
     * 
    **/
    data: XOR<VehicleModelCreateInput, VehicleModelUncheckedCreateInput>
  }


  /**
   * VehicleModel createMany
   */
  export type VehicleModelCreateManyArgs = {
    /**
     * The data used to create many VehicleModels.
     * 
    **/
    data: Enumerable<VehicleModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VehicleModel update
   */
  export type VehicleModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    /**
     * The data needed to update a VehicleModel.
     * 
    **/
    data: XOR<VehicleModelUpdateInput, VehicleModelUncheckedUpdateInput>
    /**
     * Choose, which VehicleModel to update.
     * 
    **/
    where: VehicleModelWhereUniqueInput
  }


  /**
   * VehicleModel updateMany
   */
  export type VehicleModelUpdateManyArgs = {
    /**
     * The data used to update VehicleModels.
     * 
    **/
    data: XOR<VehicleModelUpdateManyMutationInput, VehicleModelUncheckedUpdateManyInput>
    /**
     * Filter which VehicleModels to update
     * 
    **/
    where?: VehicleModelWhereInput
  }


  /**
   * VehicleModel upsert
   */
  export type VehicleModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    /**
     * The filter to search for the VehicleModel to update in case it exists.
     * 
    **/
    where: VehicleModelWhereUniqueInput
    /**
     * In case the VehicleModel found by the `where` argument doesn't exist, create a new VehicleModel with this data.
     * 
    **/
    create: XOR<VehicleModelCreateInput, VehicleModelUncheckedCreateInput>
    /**
     * In case the VehicleModel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VehicleModelUpdateInput, VehicleModelUncheckedUpdateInput>
  }


  /**
   * VehicleModel delete
   */
  export type VehicleModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
    /**
     * Filter which VehicleModel to delete.
     * 
    **/
    where: VehicleModelWhereUniqueInput
  }


  /**
   * VehicleModel deleteMany
   */
  export type VehicleModelDeleteManyArgs = {
    /**
     * Filter which VehicleModels to delete
     * 
    **/
    where?: VehicleModelWhereInput
  }


  /**
   * VehicleModel.vehicles
   */
  export type VehicleModelVehiclesArgs = {
    /**
     * Select specific fields to fetch from the Vehicle
     * 
    **/
    select?: VehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleInclude | null
    where?: VehicleWhereInput
    orderBy?: Enumerable<VehicleOrderByWithRelationInput>
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VehicleScalarFieldEnum>
  }


  /**
   * VehicleModel without action
   */
  export type VehicleModelArgs = {
    /**
     * Select specific fields to fetch from the VehicleModel
     * 
    **/
    select?: VehicleModelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehicleModelInclude | null
  }



  /**
   * Model VerificationToken
   */


  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs = {
    /**
     * Filter which VerificationToken to aggregate.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs = {
    where?: VerificationTokenWhereInput
    orderBy?: Enumerable<VerificationTokenOrderByWithAggregationInput>
    by: Array<VerificationTokenScalarFieldEnum>
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }


  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VerificationToken :
    S extends undefined ? never :
    S extends { include: any } & (VerificationTokenArgs | VerificationTokenFindManyArgs)
    ? VerificationToken 
    : S extends { select: any } & (VerificationTokenArgs | VerificationTokenFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VerificationToken ? VerificationToken[P] : never
  } 
      : VerificationToken


  type VerificationTokenCountArgs = Merge<
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }
  >

  export interface VerificationTokenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'VerificationToken'> extends True ? Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>> : Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null, null>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'VerificationToken'> extends True ? Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>> : Prisma__VerificationTokenClient<VerificationTokenGetPayload<T> | null, null>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs>
    ): PrismaPromise<Array<VerificationTokenGetPayload<T>>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs>(
      args: SelectSubset<T, VerificationTokenCreateArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs>(
      args: SelectSubset<T, VerificationTokenDeleteArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs>(
      args: SelectSubset<T, VerificationTokenUpdateArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs>(
      args: SelectSubset<T, VerificationTokenUpsertArgs>
    ): Prisma__VerificationTokenClient<VerificationTokenGetPayload<T>>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerificationTokenClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * VerificationToken base type for findUnique actions
   */
  export type VerificationTokenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUnique
   */
  export interface VerificationTokenFindUniqueArgs extends VerificationTokenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken base type for findFirst actions
   */
  export type VerificationTokenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     * 
    **/
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }

  /**
   * VerificationToken findFirst
   */
  export interface VerificationTokenFindFirstArgs extends VerificationTokenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationToken to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     * 
    **/
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter, which VerificationTokens to fetch.
     * 
    **/
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     * 
    **/
    orderBy?: Enumerable<VerificationTokenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     * 
    **/
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VerificationTokenScalarFieldEnum>
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to create a VerificationToken.
     * 
    **/
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs = {
    /**
     * The data used to create many VerificationTokens.
     * 
    **/
    data: Enumerable<VerificationTokenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The data needed to update a VerificationToken.
     * 
    **/
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs = {
    /**
     * The data used to update VerificationTokens.
     * 
    **/
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     * 
    **/
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     * 
    **/
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
    /**
     * Filter which VerificationToken to delete.
     * 
    **/
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs = {
    /**
     * Filter which VerificationTokens to delete
     * 
    **/
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenArgs = {
    /**
     * Select specific fields to fetch from the VerificationToken
     * 
    **/
    select?: VerificationTokenSelect | null
  }



  /**
   * Model Milestone
   */


  export type AggregateMilestone = {
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  export type MilestoneAvgAggregateOutputType = {
    id: number | null
    coordinatesId: number | null
  }

  export type MilestoneSumAggregateOutputType = {
    id: number | null
    coordinatesId: number | null
  }

  export type MilestoneMinAggregateOutputType = {
    id: number | null
    friendlyName: string | null
    coordinatesId: number | null
  }

  export type MilestoneMaxAggregateOutputType = {
    id: number | null
    friendlyName: string | null
    coordinatesId: number | null
  }

  export type MilestoneCountAggregateOutputType = {
    id: number
    friendlyName: number
    coordinatesId: number
    _all: number
  }


  export type MilestoneAvgAggregateInputType = {
    id?: true
    coordinatesId?: true
  }

  export type MilestoneSumAggregateInputType = {
    id?: true
    coordinatesId?: true
  }

  export type MilestoneMinAggregateInputType = {
    id?: true
    friendlyName?: true
    coordinatesId?: true
  }

  export type MilestoneMaxAggregateInputType = {
    id?: true
    friendlyName?: true
    coordinatesId?: true
  }

  export type MilestoneCountAggregateInputType = {
    id?: true
    friendlyName?: true
    coordinatesId?: true
    _all?: true
  }

  export type MilestoneAggregateArgs = {
    /**
     * Filter which Milestone to aggregate.
     * 
    **/
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     * 
    **/
    orderBy?: Enumerable<MilestoneOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Milestones
    **/
    _count?: true | MilestoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MilestoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MilestoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MilestoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MilestoneMaxAggregateInputType
  }

  export type GetMilestoneAggregateType<T extends MilestoneAggregateArgs> = {
        [P in keyof T & keyof AggregateMilestone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMilestone[P]>
      : GetScalarType<T[P], AggregateMilestone[P]>
  }




  export type MilestoneGroupByArgs = {
    where?: MilestoneWhereInput
    orderBy?: Enumerable<MilestoneOrderByWithAggregationInput>
    by: Array<MilestoneScalarFieldEnum>
    having?: MilestoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MilestoneCountAggregateInputType | true
    _avg?: MilestoneAvgAggregateInputType
    _sum?: MilestoneSumAggregateInputType
    _min?: MilestoneMinAggregateInputType
    _max?: MilestoneMaxAggregateInputType
  }


  export type MilestoneGroupByOutputType = {
    id: number
    friendlyName: string
    coordinatesId: number | null
    _count: MilestoneCountAggregateOutputType | null
    _avg: MilestoneAvgAggregateOutputType | null
    _sum: MilestoneSumAggregateOutputType | null
    _min: MilestoneMinAggregateOutputType | null
    _max: MilestoneMaxAggregateOutputType | null
  }

  type GetMilestoneGroupByPayload<T extends MilestoneGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MilestoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MilestoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
            : GetScalarType<T[P], MilestoneGroupByOutputType[P]>
        }
      >
    >


  export type MilestoneSelect = {
    id?: boolean
    friendlyName?: boolean
    coordiantes?: boolean | CoordinatesArgs
    coordinatesId?: boolean
  }


  export type MilestoneInclude = {
    coordiantes?: boolean | CoordinatesArgs
  } 

  export type MilestoneGetPayload<S extends boolean | null | undefined | MilestoneArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Milestone :
    S extends undefined ? never :
    S extends { include: any } & (MilestoneArgs | MilestoneFindManyArgs)
    ? Milestone  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coordiantes' ? CoordinatesGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (MilestoneArgs | MilestoneFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coordiantes' ? CoordinatesGetPayload<S['select'][P]> | null :  P extends keyof Milestone ? Milestone[P] : never
  } 
      : Milestone


  type MilestoneCountArgs = Merge<
    Omit<MilestoneFindManyArgs, 'select' | 'include'> & {
      select?: MilestoneCountAggregateInputType | true
    }
  >

  export interface MilestoneDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Milestone that matches the filter.
     * @param {MilestoneFindUniqueArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MilestoneFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MilestoneFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Milestone'> extends True ? Prisma__MilestoneClient<MilestoneGetPayload<T>> : Prisma__MilestoneClient<MilestoneGetPayload<T> | null, null>

    /**
     * Find one Milestone that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MilestoneFindUniqueOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MilestoneFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MilestoneFindUniqueOrThrowArgs>
    ): Prisma__MilestoneClient<MilestoneGetPayload<T>>

    /**
     * Find the first Milestone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MilestoneFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MilestoneFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Milestone'> extends True ? Prisma__MilestoneClient<MilestoneGetPayload<T>> : Prisma__MilestoneClient<MilestoneGetPayload<T> | null, null>

    /**
     * Find the first Milestone that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindFirstOrThrowArgs} args - Arguments to find a Milestone
     * @example
     * // Get one Milestone
     * const milestone = await prisma.milestone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MilestoneFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MilestoneFindFirstOrThrowArgs>
    ): Prisma__MilestoneClient<MilestoneGetPayload<T>>

    /**
     * Find zero or more Milestones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Milestones
     * const milestones = await prisma.milestone.findMany()
     * 
     * // Get first 10 Milestones
     * const milestones = await prisma.milestone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const milestoneWithIdOnly = await prisma.milestone.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MilestoneFindManyArgs>(
      args?: SelectSubset<T, MilestoneFindManyArgs>
    ): PrismaPromise<Array<MilestoneGetPayload<T>>>

    /**
     * Create a Milestone.
     * @param {MilestoneCreateArgs} args - Arguments to create a Milestone.
     * @example
     * // Create one Milestone
     * const Milestone = await prisma.milestone.create({
     *   data: {
     *     // ... data to create a Milestone
     *   }
     * })
     * 
    **/
    create<T extends MilestoneCreateArgs>(
      args: SelectSubset<T, MilestoneCreateArgs>
    ): Prisma__MilestoneClient<MilestoneGetPayload<T>>

    /**
     * Create many Milestones.
     *     @param {MilestoneCreateManyArgs} args - Arguments to create many Milestones.
     *     @example
     *     // Create many Milestones
     *     const milestone = await prisma.milestone.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MilestoneCreateManyArgs>(
      args?: SelectSubset<T, MilestoneCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Milestone.
     * @param {MilestoneDeleteArgs} args - Arguments to delete one Milestone.
     * @example
     * // Delete one Milestone
     * const Milestone = await prisma.milestone.delete({
     *   where: {
     *     // ... filter to delete one Milestone
     *   }
     * })
     * 
    **/
    delete<T extends MilestoneDeleteArgs>(
      args: SelectSubset<T, MilestoneDeleteArgs>
    ): Prisma__MilestoneClient<MilestoneGetPayload<T>>

    /**
     * Update one Milestone.
     * @param {MilestoneUpdateArgs} args - Arguments to update one Milestone.
     * @example
     * // Update one Milestone
     * const milestone = await prisma.milestone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MilestoneUpdateArgs>(
      args: SelectSubset<T, MilestoneUpdateArgs>
    ): Prisma__MilestoneClient<MilestoneGetPayload<T>>

    /**
     * Delete zero or more Milestones.
     * @param {MilestoneDeleteManyArgs} args - Arguments to filter Milestones to delete.
     * @example
     * // Delete a few Milestones
     * const { count } = await prisma.milestone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MilestoneDeleteManyArgs>(
      args?: SelectSubset<T, MilestoneDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Milestones
     * const milestone = await prisma.milestone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MilestoneUpdateManyArgs>(
      args: SelectSubset<T, MilestoneUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Milestone.
     * @param {MilestoneUpsertArgs} args - Arguments to update or create a Milestone.
     * @example
     * // Update or create a Milestone
     * const milestone = await prisma.milestone.upsert({
     *   create: {
     *     // ... data to create a Milestone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Milestone we want to update
     *   }
     * })
    **/
    upsert<T extends MilestoneUpsertArgs>(
      args: SelectSubset<T, MilestoneUpsertArgs>
    ): Prisma__MilestoneClient<MilestoneGetPayload<T>>

    /**
     * Count the number of Milestones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneCountArgs} args - Arguments to filter Milestones to count.
     * @example
     * // Count the number of Milestones
     * const count = await prisma.milestone.count({
     *   where: {
     *     // ... the filter for the Milestones we want to count
     *   }
     * })
    **/
    count<T extends MilestoneCountArgs>(
      args?: Subset<T, MilestoneCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MilestoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MilestoneAggregateArgs>(args: Subset<T, MilestoneAggregateArgs>): PrismaPromise<GetMilestoneAggregateType<T>>

    /**
     * Group by Milestone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MilestoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MilestoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MilestoneGroupByArgs['orderBy'] }
        : { orderBy?: MilestoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MilestoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMilestoneGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Milestone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MilestoneClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coordiantes<T extends CoordinatesArgs= {}>(args?: Subset<T, CoordinatesArgs>): Prisma__CoordinatesClient<CoordinatesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Milestone base type for findUnique actions
   */
  export type MilestoneFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
    /**
     * Filter, which Milestone to fetch.
     * 
    **/
    where: MilestoneWhereUniqueInput
  }

  /**
   * Milestone findUnique
   */
  export interface MilestoneFindUniqueArgs extends MilestoneFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Milestone findUniqueOrThrow
   */
  export type MilestoneFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
    /**
     * Filter, which Milestone to fetch.
     * 
    **/
    where: MilestoneWhereUniqueInput
  }


  /**
   * Milestone base type for findFirst actions
   */
  export type MilestoneFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
    /**
     * Filter, which Milestone to fetch.
     * 
    **/
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     * 
    **/
    orderBy?: Enumerable<MilestoneOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     * 
    **/
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     * 
    **/
    distinct?: Enumerable<MilestoneScalarFieldEnum>
  }

  /**
   * Milestone findFirst
   */
  export interface MilestoneFindFirstArgs extends MilestoneFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Milestone findFirstOrThrow
   */
  export type MilestoneFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
    /**
     * Filter, which Milestone to fetch.
     * 
    **/
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     * 
    **/
    orderBy?: Enumerable<MilestoneOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Milestones.
     * 
    **/
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Milestones.
     * 
    **/
    distinct?: Enumerable<MilestoneScalarFieldEnum>
  }


  /**
   * Milestone findMany
   */
  export type MilestoneFindManyArgs = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
    /**
     * Filter, which Milestones to fetch.
     * 
    **/
    where?: MilestoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Milestones to fetch.
     * 
    **/
    orderBy?: Enumerable<MilestoneOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Milestones.
     * 
    **/
    cursor?: MilestoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Milestones from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Milestones.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MilestoneScalarFieldEnum>
  }


  /**
   * Milestone create
   */
  export type MilestoneCreateArgs = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
    /**
     * The data needed to create a Milestone.
     * 
    **/
    data: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
  }


  /**
   * Milestone createMany
   */
  export type MilestoneCreateManyArgs = {
    /**
     * The data used to create many Milestones.
     * 
    **/
    data: Enumerable<MilestoneCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Milestone update
   */
  export type MilestoneUpdateArgs = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
    /**
     * The data needed to update a Milestone.
     * 
    **/
    data: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
    /**
     * Choose, which Milestone to update.
     * 
    **/
    where: MilestoneWhereUniqueInput
  }


  /**
   * Milestone updateMany
   */
  export type MilestoneUpdateManyArgs = {
    /**
     * The data used to update Milestones.
     * 
    **/
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyInput>
    /**
     * Filter which Milestones to update
     * 
    **/
    where?: MilestoneWhereInput
  }


  /**
   * Milestone upsert
   */
  export type MilestoneUpsertArgs = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
    /**
     * The filter to search for the Milestone to update in case it exists.
     * 
    **/
    where: MilestoneWhereUniqueInput
    /**
     * In case the Milestone found by the `where` argument doesn't exist, create a new Milestone with this data.
     * 
    **/
    create: XOR<MilestoneCreateInput, MilestoneUncheckedCreateInput>
    /**
     * In case the Milestone was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MilestoneUpdateInput, MilestoneUncheckedUpdateInput>
  }


  /**
   * Milestone delete
   */
  export type MilestoneDeleteArgs = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
    /**
     * Filter which Milestone to delete.
     * 
    **/
    where: MilestoneWhereUniqueInput
  }


  /**
   * Milestone deleteMany
   */
  export type MilestoneDeleteManyArgs = {
    /**
     * Filter which Milestones to delete
     * 
    **/
    where?: MilestoneWhereInput
  }


  /**
   * Milestone without action
   */
  export type MilestoneArgs = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
  }



  /**
   * Model Coordinates
   */


  export type AggregateCoordinates = {
    _count: CoordinatesCountAggregateOutputType | null
    _avg: CoordinatesAvgAggregateOutputType | null
    _sum: CoordinatesSumAggregateOutputType | null
    _min: CoordinatesMinAggregateOutputType | null
    _max: CoordinatesMaxAggregateOutputType | null
  }

  export type CoordinatesAvgAggregateOutputType = {
    id: number | null
    lat: number | null
    lng: number | null
  }

  export type CoordinatesSumAggregateOutputType = {
    id: number | null
    lat: number | null
    lng: number | null
  }

  export type CoordinatesMinAggregateOutputType = {
    id: number | null
    lat: number | null
    lng: number | null
    timestamp: Date | null
  }

  export type CoordinatesMaxAggregateOutputType = {
    id: number | null
    lat: number | null
    lng: number | null
    timestamp: Date | null
  }

  export type CoordinatesCountAggregateOutputType = {
    id: number
    lat: number
    lng: number
    timestamp: number
    _all: number
  }


  export type CoordinatesAvgAggregateInputType = {
    id?: true
    lat?: true
    lng?: true
  }

  export type CoordinatesSumAggregateInputType = {
    id?: true
    lat?: true
    lng?: true
  }

  export type CoordinatesMinAggregateInputType = {
    id?: true
    lat?: true
    lng?: true
    timestamp?: true
  }

  export type CoordinatesMaxAggregateInputType = {
    id?: true
    lat?: true
    lng?: true
    timestamp?: true
  }

  export type CoordinatesCountAggregateInputType = {
    id?: true
    lat?: true
    lng?: true
    timestamp?: true
    _all?: true
  }

  export type CoordinatesAggregateArgs = {
    /**
     * Filter which Coordinates to aggregate.
     * 
    **/
    where?: CoordinatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     * 
    **/
    orderBy?: Enumerable<CoordinatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CoordinatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coordinates
    **/
    _count?: true | CoordinatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoordinatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoordinatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoordinatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoordinatesMaxAggregateInputType
  }

  export type GetCoordinatesAggregateType<T extends CoordinatesAggregateArgs> = {
        [P in keyof T & keyof AggregateCoordinates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoordinates[P]>
      : GetScalarType<T[P], AggregateCoordinates[P]>
  }




  export type CoordinatesGroupByArgs = {
    where?: CoordinatesWhereInput
    orderBy?: Enumerable<CoordinatesOrderByWithAggregationInput>
    by: Array<CoordinatesScalarFieldEnum>
    having?: CoordinatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoordinatesCountAggregateInputType | true
    _avg?: CoordinatesAvgAggregateInputType
    _sum?: CoordinatesSumAggregateInputType
    _min?: CoordinatesMinAggregateInputType
    _max?: CoordinatesMaxAggregateInputType
  }


  export type CoordinatesGroupByOutputType = {
    id: number
    lat: number
    lng: number
    timestamp: Date
    _count: CoordinatesCountAggregateOutputType | null
    _avg: CoordinatesAvgAggregateOutputType | null
    _sum: CoordinatesSumAggregateOutputType | null
    _min: CoordinatesMinAggregateOutputType | null
    _max: CoordinatesMaxAggregateOutputType | null
  }

  type GetCoordinatesGroupByPayload<T extends CoordinatesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CoordinatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoordinatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoordinatesGroupByOutputType[P]>
            : GetScalarType<T[P], CoordinatesGroupByOutputType[P]>
        }
      >
    >


  export type CoordinatesSelect = {
    id?: boolean
    lat?: boolean
    lng?: boolean
    timestamp?: boolean
    milestone?: boolean | CoordinatesMilestoneArgs
    Adress?: boolean | CoordinatesAdressArgs
    AOI?: boolean | CoordinatesAOIArgs
    _count?: boolean | CoordinatesCountOutputTypeArgs
  }


  export type CoordinatesInclude = {
    milestone?: boolean | CoordinatesMilestoneArgs
    Adress?: boolean | CoordinatesAdressArgs
    AOI?: boolean | CoordinatesAOIArgs
    _count?: boolean | CoordinatesCountOutputTypeArgs
  } 

  export type CoordinatesGetPayload<S extends boolean | null | undefined | CoordinatesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Coordinates :
    S extends undefined ? never :
    S extends { include: any } & (CoordinatesArgs | CoordinatesFindManyArgs)
    ? Coordinates  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'milestone' ? Array < MilestoneGetPayload<S['include'][P]>>  :
        P extends 'Adress' ? Array < AdressGetPayload<S['include'][P]>>  :
        P extends 'AOI' ? Array < AOIGetPayload<S['include'][P]>>  :
        P extends '_count' ? CoordinatesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CoordinatesArgs | CoordinatesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'milestone' ? Array < MilestoneGetPayload<S['select'][P]>>  :
        P extends 'Adress' ? Array < AdressGetPayload<S['select'][P]>>  :
        P extends 'AOI' ? Array < AOIGetPayload<S['select'][P]>>  :
        P extends '_count' ? CoordinatesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Coordinates ? Coordinates[P] : never
  } 
      : Coordinates


  type CoordinatesCountArgs = Merge<
    Omit<CoordinatesFindManyArgs, 'select' | 'include'> & {
      select?: CoordinatesCountAggregateInputType | true
    }
  >

  export interface CoordinatesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Coordinates that matches the filter.
     * @param {CoordinatesFindUniqueArgs} args - Arguments to find a Coordinates
     * @example
     * // Get one Coordinates
     * const coordinates = await prisma.coordinates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CoordinatesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CoordinatesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Coordinates'> extends True ? Prisma__CoordinatesClient<CoordinatesGetPayload<T>> : Prisma__CoordinatesClient<CoordinatesGetPayload<T> | null, null>

    /**
     * Find one Coordinates that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CoordinatesFindUniqueOrThrowArgs} args - Arguments to find a Coordinates
     * @example
     * // Get one Coordinates
     * const coordinates = await prisma.coordinates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CoordinatesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CoordinatesFindUniqueOrThrowArgs>
    ): Prisma__CoordinatesClient<CoordinatesGetPayload<T>>

    /**
     * Find the first Coordinates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatesFindFirstArgs} args - Arguments to find a Coordinates
     * @example
     * // Get one Coordinates
     * const coordinates = await prisma.coordinates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CoordinatesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CoordinatesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Coordinates'> extends True ? Prisma__CoordinatesClient<CoordinatesGetPayload<T>> : Prisma__CoordinatesClient<CoordinatesGetPayload<T> | null, null>

    /**
     * Find the first Coordinates that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatesFindFirstOrThrowArgs} args - Arguments to find a Coordinates
     * @example
     * // Get one Coordinates
     * const coordinates = await prisma.coordinates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CoordinatesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CoordinatesFindFirstOrThrowArgs>
    ): Prisma__CoordinatesClient<CoordinatesGetPayload<T>>

    /**
     * Find zero or more Coordinates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coordinates
     * const coordinates = await prisma.coordinates.findMany()
     * 
     * // Get first 10 Coordinates
     * const coordinates = await prisma.coordinates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coordinatesWithIdOnly = await prisma.coordinates.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CoordinatesFindManyArgs>(
      args?: SelectSubset<T, CoordinatesFindManyArgs>
    ): PrismaPromise<Array<CoordinatesGetPayload<T>>>

    /**
     * Create a Coordinates.
     * @param {CoordinatesCreateArgs} args - Arguments to create a Coordinates.
     * @example
     * // Create one Coordinates
     * const Coordinates = await prisma.coordinates.create({
     *   data: {
     *     // ... data to create a Coordinates
     *   }
     * })
     * 
    **/
    create<T extends CoordinatesCreateArgs>(
      args: SelectSubset<T, CoordinatesCreateArgs>
    ): Prisma__CoordinatesClient<CoordinatesGetPayload<T>>

    /**
     * Create many Coordinates.
     *     @param {CoordinatesCreateManyArgs} args - Arguments to create many Coordinates.
     *     @example
     *     // Create many Coordinates
     *     const coordinates = await prisma.coordinates.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CoordinatesCreateManyArgs>(
      args?: SelectSubset<T, CoordinatesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Coordinates.
     * @param {CoordinatesDeleteArgs} args - Arguments to delete one Coordinates.
     * @example
     * // Delete one Coordinates
     * const Coordinates = await prisma.coordinates.delete({
     *   where: {
     *     // ... filter to delete one Coordinates
     *   }
     * })
     * 
    **/
    delete<T extends CoordinatesDeleteArgs>(
      args: SelectSubset<T, CoordinatesDeleteArgs>
    ): Prisma__CoordinatesClient<CoordinatesGetPayload<T>>

    /**
     * Update one Coordinates.
     * @param {CoordinatesUpdateArgs} args - Arguments to update one Coordinates.
     * @example
     * // Update one Coordinates
     * const coordinates = await prisma.coordinates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CoordinatesUpdateArgs>(
      args: SelectSubset<T, CoordinatesUpdateArgs>
    ): Prisma__CoordinatesClient<CoordinatesGetPayload<T>>

    /**
     * Delete zero or more Coordinates.
     * @param {CoordinatesDeleteManyArgs} args - Arguments to filter Coordinates to delete.
     * @example
     * // Delete a few Coordinates
     * const { count } = await prisma.coordinates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CoordinatesDeleteManyArgs>(
      args?: SelectSubset<T, CoordinatesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coordinates
     * const coordinates = await prisma.coordinates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CoordinatesUpdateManyArgs>(
      args: SelectSubset<T, CoordinatesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Coordinates.
     * @param {CoordinatesUpsertArgs} args - Arguments to update or create a Coordinates.
     * @example
     * // Update or create a Coordinates
     * const coordinates = await prisma.coordinates.upsert({
     *   create: {
     *     // ... data to create a Coordinates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coordinates we want to update
     *   }
     * })
    **/
    upsert<T extends CoordinatesUpsertArgs>(
      args: SelectSubset<T, CoordinatesUpsertArgs>
    ): Prisma__CoordinatesClient<CoordinatesGetPayload<T>>

    /**
     * Count the number of Coordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatesCountArgs} args - Arguments to filter Coordinates to count.
     * @example
     * // Count the number of Coordinates
     * const count = await prisma.coordinates.count({
     *   where: {
     *     // ... the filter for the Coordinates we want to count
     *   }
     * })
    **/
    count<T extends CoordinatesCountArgs>(
      args?: Subset<T, CoordinatesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoordinatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CoordinatesAggregateArgs>(args: Subset<T, CoordinatesAggregateArgs>): PrismaPromise<GetCoordinatesAggregateType<T>>

    /**
     * Group by Coordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoordinatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CoordinatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoordinatesGroupByArgs['orderBy'] }
        : { orderBy?: CoordinatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CoordinatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoordinatesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Coordinates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CoordinatesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    milestone<T extends CoordinatesMilestoneArgs= {}>(args?: Subset<T, CoordinatesMilestoneArgs>): PrismaPromise<Array<MilestoneGetPayload<T>>| Null>;

    Adress<T extends CoordinatesAdressArgs= {}>(args?: Subset<T, CoordinatesAdressArgs>): PrismaPromise<Array<AdressGetPayload<T>>| Null>;

    AOI<T extends CoordinatesAOIArgs= {}>(args?: Subset<T, CoordinatesAOIArgs>): PrismaPromise<Array<AOIGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Coordinates base type for findUnique actions
   */
  export type CoordinatesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
    /**
     * Filter, which Coordinates to fetch.
     * 
    **/
    where: CoordinatesWhereUniqueInput
  }

  /**
   * Coordinates findUnique
   */
  export interface CoordinatesFindUniqueArgs extends CoordinatesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Coordinates findUniqueOrThrow
   */
  export type CoordinatesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
    /**
     * Filter, which Coordinates to fetch.
     * 
    **/
    where: CoordinatesWhereUniqueInput
  }


  /**
   * Coordinates base type for findFirst actions
   */
  export type CoordinatesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
    /**
     * Filter, which Coordinates to fetch.
     * 
    **/
    where?: CoordinatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     * 
    **/
    orderBy?: Enumerable<CoordinatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinates.
     * 
    **/
    cursor?: CoordinatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinates.
     * 
    **/
    distinct?: Enumerable<CoordinatesScalarFieldEnum>
  }

  /**
   * Coordinates findFirst
   */
  export interface CoordinatesFindFirstArgs extends CoordinatesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Coordinates findFirstOrThrow
   */
  export type CoordinatesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
    /**
     * Filter, which Coordinates to fetch.
     * 
    **/
    where?: CoordinatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     * 
    **/
    orderBy?: Enumerable<CoordinatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coordinates.
     * 
    **/
    cursor?: CoordinatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coordinates.
     * 
    **/
    distinct?: Enumerable<CoordinatesScalarFieldEnum>
  }


  /**
   * Coordinates findMany
   */
  export type CoordinatesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
    /**
     * Filter, which Coordinates to fetch.
     * 
    **/
    where?: CoordinatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coordinates to fetch.
     * 
    **/
    orderBy?: Enumerable<CoordinatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coordinates.
     * 
    **/
    cursor?: CoordinatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coordinates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coordinates.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CoordinatesScalarFieldEnum>
  }


  /**
   * Coordinates create
   */
  export type CoordinatesCreateArgs = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
    /**
     * The data needed to create a Coordinates.
     * 
    **/
    data: XOR<CoordinatesCreateInput, CoordinatesUncheckedCreateInput>
  }


  /**
   * Coordinates createMany
   */
  export type CoordinatesCreateManyArgs = {
    /**
     * The data used to create many Coordinates.
     * 
    **/
    data: Enumerable<CoordinatesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Coordinates update
   */
  export type CoordinatesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
    /**
     * The data needed to update a Coordinates.
     * 
    **/
    data: XOR<CoordinatesUpdateInput, CoordinatesUncheckedUpdateInput>
    /**
     * Choose, which Coordinates to update.
     * 
    **/
    where: CoordinatesWhereUniqueInput
  }


  /**
   * Coordinates updateMany
   */
  export type CoordinatesUpdateManyArgs = {
    /**
     * The data used to update Coordinates.
     * 
    **/
    data: XOR<CoordinatesUpdateManyMutationInput, CoordinatesUncheckedUpdateManyInput>
    /**
     * Filter which Coordinates to update
     * 
    **/
    where?: CoordinatesWhereInput
  }


  /**
   * Coordinates upsert
   */
  export type CoordinatesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
    /**
     * The filter to search for the Coordinates to update in case it exists.
     * 
    **/
    where: CoordinatesWhereUniqueInput
    /**
     * In case the Coordinates found by the `where` argument doesn't exist, create a new Coordinates with this data.
     * 
    **/
    create: XOR<CoordinatesCreateInput, CoordinatesUncheckedCreateInput>
    /**
     * In case the Coordinates was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CoordinatesUpdateInput, CoordinatesUncheckedUpdateInput>
  }


  /**
   * Coordinates delete
   */
  export type CoordinatesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
    /**
     * Filter which Coordinates to delete.
     * 
    **/
    where: CoordinatesWhereUniqueInput
  }


  /**
   * Coordinates deleteMany
   */
  export type CoordinatesDeleteManyArgs = {
    /**
     * Filter which Coordinates to delete
     * 
    **/
    where?: CoordinatesWhereInput
  }


  /**
   * Coordinates.milestone
   */
  export type CoordinatesMilestoneArgs = {
    /**
     * Select specific fields to fetch from the Milestone
     * 
    **/
    select?: MilestoneSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MilestoneInclude | null
    where?: MilestoneWhereInput
    orderBy?: Enumerable<MilestoneOrderByWithRelationInput>
    cursor?: MilestoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MilestoneScalarFieldEnum>
  }


  /**
   * Coordinates.Adress
   */
  export type CoordinatesAdressArgs = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
    where?: AdressWhereInput
    orderBy?: Enumerable<AdressOrderByWithRelationInput>
    cursor?: AdressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AdressScalarFieldEnum>
  }


  /**
   * Coordinates.AOI
   */
  export type CoordinatesAOIArgs = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
    where?: AOIWhereInput
    orderBy?: Enumerable<AOIOrderByWithRelationInput>
    cursor?: AOIWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AOIScalarFieldEnum>
  }


  /**
   * Coordinates without action
   */
  export type CoordinatesArgs = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
  }



  /**
   * Model Adress
   */


  export type AggregateAdress = {
    _count: AdressCountAggregateOutputType | null
    _avg: AdressAvgAggregateOutputType | null
    _sum: AdressSumAggregateOutputType | null
    _min: AdressMinAggregateOutputType | null
    _max: AdressMaxAggregateOutputType | null
  }

  export type AdressAvgAggregateOutputType = {
    coordinatesId: number | null
  }

  export type AdressSumAggregateOutputType = {
    coordinatesId: number | null
  }

  export type AdressMinAggregateOutputType = {
    id: string | null
    name: string | null
    coordinatesId: number | null
  }

  export type AdressMaxAggregateOutputType = {
    id: string | null
    name: string | null
    coordinatesId: number | null
  }

  export type AdressCountAggregateOutputType = {
    id: number
    name: number
    coordinatesId: number
    _all: number
  }


  export type AdressAvgAggregateInputType = {
    coordinatesId?: true
  }

  export type AdressSumAggregateInputType = {
    coordinatesId?: true
  }

  export type AdressMinAggregateInputType = {
    id?: true
    name?: true
    coordinatesId?: true
  }

  export type AdressMaxAggregateInputType = {
    id?: true
    name?: true
    coordinatesId?: true
  }

  export type AdressCountAggregateInputType = {
    id?: true
    name?: true
    coordinatesId?: true
    _all?: true
  }

  export type AdressAggregateArgs = {
    /**
     * Filter which Adress to aggregate.
     * 
    **/
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AdressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Adresses
    **/
    _count?: true | AdressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdressMaxAggregateInputType
  }

  export type GetAdressAggregateType<T extends AdressAggregateArgs> = {
        [P in keyof T & keyof AggregateAdress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdress[P]>
      : GetScalarType<T[P], AggregateAdress[P]>
  }




  export type AdressGroupByArgs = {
    where?: AdressWhereInput
    orderBy?: Enumerable<AdressOrderByWithAggregationInput>
    by: Array<AdressScalarFieldEnum>
    having?: AdressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdressCountAggregateInputType | true
    _avg?: AdressAvgAggregateInputType
    _sum?: AdressSumAggregateInputType
    _min?: AdressMinAggregateInputType
    _max?: AdressMaxAggregateInputType
  }


  export type AdressGroupByOutputType = {
    id: string
    name: string
    coordinatesId: number
    _count: AdressCountAggregateOutputType | null
    _avg: AdressAvgAggregateOutputType | null
    _sum: AdressSumAggregateOutputType | null
    _min: AdressMinAggregateOutputType | null
    _max: AdressMaxAggregateOutputType | null
  }

  type GetAdressGroupByPayload<T extends AdressGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AdressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdressGroupByOutputType[P]>
            : GetScalarType<T[P], AdressGroupByOutputType[P]>
        }
      >
    >


  export type AdressSelect = {
    id?: boolean
    name?: boolean
    coordinates?: boolean | CoordinatesArgs
    coordinatesId?: boolean
    PickUps?: boolean | AdressPickUpsArgs
    DropOffs?: boolean | AdressDropOffsArgs
    Departures?: boolean | AdressDeparturesArgs
    Arrivals?: boolean | AdressArrivalsArgs
    _count?: boolean | AdressCountOutputTypeArgs
  }


  export type AdressInclude = {
    coordinates?: boolean | CoordinatesArgs
    PickUps?: boolean | AdressPickUpsArgs
    DropOffs?: boolean | AdressDropOffsArgs
    Departures?: boolean | AdressDeparturesArgs
    Arrivals?: boolean | AdressArrivalsArgs
    _count?: boolean | AdressCountOutputTypeArgs
  } 

  export type AdressGetPayload<S extends boolean | null | undefined | AdressArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Adress :
    S extends undefined ? never :
    S extends { include: any } & (AdressArgs | AdressFindManyArgs)
    ? Adress  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coordinates' ? CoordinatesGetPayload<S['include'][P]> :
        P extends 'PickUps' ? Array < SeatAssignementGetPayload<S['include'][P]>>  :
        P extends 'DropOffs' ? Array < SeatAssignementGetPayload<S['include'][P]>>  :
        P extends 'Departures' ? Array < TripGetPayload<S['include'][P]>>  :
        P extends 'Arrivals' ? Array < TripGetPayload<S['include'][P]>>  :
        P extends '_count' ? AdressCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AdressArgs | AdressFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coordinates' ? CoordinatesGetPayload<S['select'][P]> :
        P extends 'PickUps' ? Array < SeatAssignementGetPayload<S['select'][P]>>  :
        P extends 'DropOffs' ? Array < SeatAssignementGetPayload<S['select'][P]>>  :
        P extends 'Departures' ? Array < TripGetPayload<S['select'][P]>>  :
        P extends 'Arrivals' ? Array < TripGetPayload<S['select'][P]>>  :
        P extends '_count' ? AdressCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Adress ? Adress[P] : never
  } 
      : Adress


  type AdressCountArgs = Merge<
    Omit<AdressFindManyArgs, 'select' | 'include'> & {
      select?: AdressCountAggregateInputType | true
    }
  >

  export interface AdressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Adress that matches the filter.
     * @param {AdressFindUniqueArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Adress'> extends True ? Prisma__AdressClient<AdressGetPayload<T>> : Prisma__AdressClient<AdressGetPayload<T> | null, null>

    /**
     * Find one Adress that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdressFindUniqueOrThrowArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdressFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AdressFindUniqueOrThrowArgs>
    ): Prisma__AdressClient<AdressGetPayload<T>>

    /**
     * Find the first Adress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindFirstArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Adress'> extends True ? Prisma__AdressClient<AdressGetPayload<T>> : Prisma__AdressClient<AdressGetPayload<T> | null, null>

    /**
     * Find the first Adress that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindFirstOrThrowArgs} args - Arguments to find a Adress
     * @example
     * // Get one Adress
     * const adress = await prisma.adress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdressFindFirstOrThrowArgs>
    ): Prisma__AdressClient<AdressGetPayload<T>>

    /**
     * Find zero or more Adresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Adresses
     * const adresses = await prisma.adress.findMany()
     * 
     * // Get first 10 Adresses
     * const adresses = await prisma.adress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adressWithIdOnly = await prisma.adress.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdressFindManyArgs>(
      args?: SelectSubset<T, AdressFindManyArgs>
    ): PrismaPromise<Array<AdressGetPayload<T>>>

    /**
     * Create a Adress.
     * @param {AdressCreateArgs} args - Arguments to create a Adress.
     * @example
     * // Create one Adress
     * const Adress = await prisma.adress.create({
     *   data: {
     *     // ... data to create a Adress
     *   }
     * })
     * 
    **/
    create<T extends AdressCreateArgs>(
      args: SelectSubset<T, AdressCreateArgs>
    ): Prisma__AdressClient<AdressGetPayload<T>>

    /**
     * Create many Adresses.
     *     @param {AdressCreateManyArgs} args - Arguments to create many Adresses.
     *     @example
     *     // Create many Adresses
     *     const adress = await prisma.adress.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdressCreateManyArgs>(
      args?: SelectSubset<T, AdressCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Adress.
     * @param {AdressDeleteArgs} args - Arguments to delete one Adress.
     * @example
     * // Delete one Adress
     * const Adress = await prisma.adress.delete({
     *   where: {
     *     // ... filter to delete one Adress
     *   }
     * })
     * 
    **/
    delete<T extends AdressDeleteArgs>(
      args: SelectSubset<T, AdressDeleteArgs>
    ): Prisma__AdressClient<AdressGetPayload<T>>

    /**
     * Update one Adress.
     * @param {AdressUpdateArgs} args - Arguments to update one Adress.
     * @example
     * // Update one Adress
     * const adress = await prisma.adress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdressUpdateArgs>(
      args: SelectSubset<T, AdressUpdateArgs>
    ): Prisma__AdressClient<AdressGetPayload<T>>

    /**
     * Delete zero or more Adresses.
     * @param {AdressDeleteManyArgs} args - Arguments to filter Adresses to delete.
     * @example
     * // Delete a few Adresses
     * const { count } = await prisma.adress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdressDeleteManyArgs>(
      args?: SelectSubset<T, AdressDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Adresses
     * const adress = await prisma.adress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdressUpdateManyArgs>(
      args: SelectSubset<T, AdressUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Adress.
     * @param {AdressUpsertArgs} args - Arguments to update or create a Adress.
     * @example
     * // Update or create a Adress
     * const adress = await prisma.adress.upsert({
     *   create: {
     *     // ... data to create a Adress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Adress we want to update
     *   }
     * })
    **/
    upsert<T extends AdressUpsertArgs>(
      args: SelectSubset<T, AdressUpsertArgs>
    ): Prisma__AdressClient<AdressGetPayload<T>>

    /**
     * Count the number of Adresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressCountArgs} args - Arguments to filter Adresses to count.
     * @example
     * // Count the number of Adresses
     * const count = await prisma.adress.count({
     *   where: {
     *     // ... the filter for the Adresses we want to count
     *   }
     * })
    **/
    count<T extends AdressCountArgs>(
      args?: Subset<T, AdressCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Adress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdressAggregateArgs>(args: Subset<T, AdressAggregateArgs>): PrismaPromise<GetAdressAggregateType<T>>

    /**
     * Group by Adress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdressGroupByArgs['orderBy'] }
        : { orderBy?: AdressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdressGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Adress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdressClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coordinates<T extends CoordinatesArgs= {}>(args?: Subset<T, CoordinatesArgs>): Prisma__CoordinatesClient<CoordinatesGetPayload<T> | Null>;

    PickUps<T extends AdressPickUpsArgs= {}>(args?: Subset<T, AdressPickUpsArgs>): PrismaPromise<Array<SeatAssignementGetPayload<T>>| Null>;

    DropOffs<T extends AdressDropOffsArgs= {}>(args?: Subset<T, AdressDropOffsArgs>): PrismaPromise<Array<SeatAssignementGetPayload<T>>| Null>;

    Departures<T extends AdressDeparturesArgs= {}>(args?: Subset<T, AdressDeparturesArgs>): PrismaPromise<Array<TripGetPayload<T>>| Null>;

    Arrivals<T extends AdressArrivalsArgs= {}>(args?: Subset<T, AdressArrivalsArgs>): PrismaPromise<Array<TripGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Adress base type for findUnique actions
   */
  export type AdressFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
    /**
     * Filter, which Adress to fetch.
     * 
    **/
    where: AdressWhereUniqueInput
  }

  /**
   * Adress findUnique
   */
  export interface AdressFindUniqueArgs extends AdressFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Adress findUniqueOrThrow
   */
  export type AdressFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
    /**
     * Filter, which Adress to fetch.
     * 
    **/
    where: AdressWhereUniqueInput
  }


  /**
   * Adress base type for findFirst actions
   */
  export type AdressFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
    /**
     * Filter, which Adress to fetch.
     * 
    **/
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AdressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     * 
    **/
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     * 
    **/
    distinct?: Enumerable<AdressScalarFieldEnum>
  }

  /**
   * Adress findFirst
   */
  export interface AdressFindFirstArgs extends AdressFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Adress findFirstOrThrow
   */
  export type AdressFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
    /**
     * Filter, which Adress to fetch.
     * 
    **/
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AdressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Adresses.
     * 
    **/
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Adresses.
     * 
    **/
    distinct?: Enumerable<AdressScalarFieldEnum>
  }


  /**
   * Adress findMany
   */
  export type AdressFindManyArgs = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
    /**
     * Filter, which Adresses to fetch.
     * 
    **/
    where?: AdressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Adresses to fetch.
     * 
    **/
    orderBy?: Enumerable<AdressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Adresses.
     * 
    **/
    cursor?: AdressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Adresses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Adresses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AdressScalarFieldEnum>
  }


  /**
   * Adress create
   */
  export type AdressCreateArgs = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
    /**
     * The data needed to create a Adress.
     * 
    **/
    data: XOR<AdressCreateInput, AdressUncheckedCreateInput>
  }


  /**
   * Adress createMany
   */
  export type AdressCreateManyArgs = {
    /**
     * The data used to create many Adresses.
     * 
    **/
    data: Enumerable<AdressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Adress update
   */
  export type AdressUpdateArgs = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
    /**
     * The data needed to update a Adress.
     * 
    **/
    data: XOR<AdressUpdateInput, AdressUncheckedUpdateInput>
    /**
     * Choose, which Adress to update.
     * 
    **/
    where: AdressWhereUniqueInput
  }


  /**
   * Adress updateMany
   */
  export type AdressUpdateManyArgs = {
    /**
     * The data used to update Adresses.
     * 
    **/
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyInput>
    /**
     * Filter which Adresses to update
     * 
    **/
    where?: AdressWhereInput
  }


  /**
   * Adress upsert
   */
  export type AdressUpsertArgs = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
    /**
     * The filter to search for the Adress to update in case it exists.
     * 
    **/
    where: AdressWhereUniqueInput
    /**
     * In case the Adress found by the `where` argument doesn't exist, create a new Adress with this data.
     * 
    **/
    create: XOR<AdressCreateInput, AdressUncheckedCreateInput>
    /**
     * In case the Adress was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AdressUpdateInput, AdressUncheckedUpdateInput>
  }


  /**
   * Adress delete
   */
  export type AdressDeleteArgs = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
    /**
     * Filter which Adress to delete.
     * 
    **/
    where: AdressWhereUniqueInput
  }


  /**
   * Adress deleteMany
   */
  export type AdressDeleteManyArgs = {
    /**
     * Filter which Adresses to delete
     * 
    **/
    where?: AdressWhereInput
  }


  /**
   * Adress.PickUps
   */
  export type AdressPickUpsArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    where?: SeatAssignementWhereInput
    orderBy?: Enumerable<SeatAssignementOrderByWithRelationInput>
    cursor?: SeatAssignementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SeatAssignementScalarFieldEnum>
  }


  /**
   * Adress.DropOffs
   */
  export type AdressDropOffsArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    where?: SeatAssignementWhereInput
    orderBy?: Enumerable<SeatAssignementOrderByWithRelationInput>
    cursor?: SeatAssignementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SeatAssignementScalarFieldEnum>
  }


  /**
   * Adress.Departures
   */
  export type AdressDeparturesArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    where?: TripWhereInput
    orderBy?: Enumerable<TripOrderByWithRelationInput>
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TripScalarFieldEnum>
  }


  /**
   * Adress.Arrivals
   */
  export type AdressArrivalsArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    where?: TripWhereInput
    orderBy?: Enumerable<TripOrderByWithRelationInput>
    cursor?: TripWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TripScalarFieldEnum>
  }


  /**
   * Adress without action
   */
  export type AdressArgs = {
    /**
     * Select specific fields to fetch from the Adress
     * 
    **/
    select?: AdressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AdressInclude | null
  }



  /**
   * Model SeatAssignement
   */


  export type AggregateSeatAssignement = {
    _count: SeatAssignementCountAggregateOutputType | null
    _avg: SeatAssignementAvgAggregateOutputType | null
    _sum: SeatAssignementSumAggregateOutputType | null
    _min: SeatAssignementMinAggregateOutputType | null
    _max: SeatAssignementMaxAggregateOutputType | null
  }

  export type SeatAssignementAvgAggregateOutputType = {
    userRating: number | null
  }

  export type SeatAssignementSumAggregateOutputType = {
    userRating: number | null
  }

  export type SeatAssignementMinAggregateOutputType = {
    id: string | null
    pickupAdressId: string | null
    dropoffAdressId: string | null
    status: string | null
    qrCode: string | null
    userRating: number | null
    message: string | null
    tripId: string | null
    passengerId: string | null
    pickupType: string | null
    dropoffType: string | null
  }

  export type SeatAssignementMaxAggregateOutputType = {
    id: string | null
    pickupAdressId: string | null
    dropoffAdressId: string | null
    status: string | null
    qrCode: string | null
    userRating: number | null
    message: string | null
    tripId: string | null
    passengerId: string | null
    pickupType: string | null
    dropoffType: string | null
  }

  export type SeatAssignementCountAggregateOutputType = {
    id: number
    pickupAdressId: number
    dropoffAdressId: number
    status: number
    qrCode: number
    userRating: number
    message: number
    tripId: number
    passengerId: number
    pickupType: number
    dropoffType: number
    _all: number
  }


  export type SeatAssignementAvgAggregateInputType = {
    userRating?: true
  }

  export type SeatAssignementSumAggregateInputType = {
    userRating?: true
  }

  export type SeatAssignementMinAggregateInputType = {
    id?: true
    pickupAdressId?: true
    dropoffAdressId?: true
    status?: true
    qrCode?: true
    userRating?: true
    message?: true
    tripId?: true
    passengerId?: true
    pickupType?: true
    dropoffType?: true
  }

  export type SeatAssignementMaxAggregateInputType = {
    id?: true
    pickupAdressId?: true
    dropoffAdressId?: true
    status?: true
    qrCode?: true
    userRating?: true
    message?: true
    tripId?: true
    passengerId?: true
    pickupType?: true
    dropoffType?: true
  }

  export type SeatAssignementCountAggregateInputType = {
    id?: true
    pickupAdressId?: true
    dropoffAdressId?: true
    status?: true
    qrCode?: true
    userRating?: true
    message?: true
    tripId?: true
    passengerId?: true
    pickupType?: true
    dropoffType?: true
    _all?: true
  }

  export type SeatAssignementAggregateArgs = {
    /**
     * Filter which SeatAssignement to aggregate.
     * 
    **/
    where?: SeatAssignementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatAssignements to fetch.
     * 
    **/
    orderBy?: Enumerable<SeatAssignementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SeatAssignementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatAssignements from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatAssignements.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SeatAssignements
    **/
    _count?: true | SeatAssignementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatAssignementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatAssignementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatAssignementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatAssignementMaxAggregateInputType
  }

  export type GetSeatAssignementAggregateType<T extends SeatAssignementAggregateArgs> = {
        [P in keyof T & keyof AggregateSeatAssignement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeatAssignement[P]>
      : GetScalarType<T[P], AggregateSeatAssignement[P]>
  }




  export type SeatAssignementGroupByArgs = {
    where?: SeatAssignementWhereInput
    orderBy?: Enumerable<SeatAssignementOrderByWithAggregationInput>
    by: Array<SeatAssignementScalarFieldEnum>
    having?: SeatAssignementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatAssignementCountAggregateInputType | true
    _avg?: SeatAssignementAvgAggregateInputType
    _sum?: SeatAssignementSumAggregateInputType
    _min?: SeatAssignementMinAggregateInputType
    _max?: SeatAssignementMaxAggregateInputType
  }


  export type SeatAssignementGroupByOutputType = {
    id: string
    pickupAdressId: string
    dropoffAdressId: string
    status: string
    qrCode: string
    userRating: number | null
    message: string | null
    tripId: string
    passengerId: string
    pickupType: string | null
    dropoffType: string | null
    _count: SeatAssignementCountAggregateOutputType | null
    _avg: SeatAssignementAvgAggregateOutputType | null
    _sum: SeatAssignementSumAggregateOutputType | null
    _min: SeatAssignementMinAggregateOutputType | null
    _max: SeatAssignementMaxAggregateOutputType | null
  }

  type GetSeatAssignementGroupByPayload<T extends SeatAssignementGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SeatAssignementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatAssignementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatAssignementGroupByOutputType[P]>
            : GetScalarType<T[P], SeatAssignementGroupByOutputType[P]>
        }
      >
    >


  export type SeatAssignementSelect = {
    id?: boolean
    pickupAddress?: boolean | AdressArgs
    pickupAdressId?: boolean
    dropoffAddress?: boolean | AdressArgs
    dropoffAdressId?: boolean
    status?: boolean
    qrCode?: boolean
    userRating?: boolean
    message?: boolean
    trip?: boolean | TripArgs
    tripId?: boolean
    passenger?: boolean | MobileUserArgs
    passengerId?: boolean
    pickupType?: boolean
    dropoffType?: boolean
  }


  export type SeatAssignementInclude = {
    pickupAddress?: boolean | AdressArgs
    dropoffAddress?: boolean | AdressArgs
    trip?: boolean | TripArgs
    passenger?: boolean | MobileUserArgs
  } 

  export type SeatAssignementGetPayload<S extends boolean | null | undefined | SeatAssignementArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? SeatAssignement :
    S extends undefined ? never :
    S extends { include: any } & (SeatAssignementArgs | SeatAssignementFindManyArgs)
    ? SeatAssignement  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'pickupAddress' ? AdressGetPayload<S['include'][P]> :
        P extends 'dropoffAddress' ? AdressGetPayload<S['include'][P]> :
        P extends 'trip' ? TripGetPayload<S['include'][P]> :
        P extends 'passenger' ? MobileUserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (SeatAssignementArgs | SeatAssignementFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'pickupAddress' ? AdressGetPayload<S['select'][P]> :
        P extends 'dropoffAddress' ? AdressGetPayload<S['select'][P]> :
        P extends 'trip' ? TripGetPayload<S['select'][P]> :
        P extends 'passenger' ? MobileUserGetPayload<S['select'][P]> :  P extends keyof SeatAssignement ? SeatAssignement[P] : never
  } 
      : SeatAssignement


  type SeatAssignementCountArgs = Merge<
    Omit<SeatAssignementFindManyArgs, 'select' | 'include'> & {
      select?: SeatAssignementCountAggregateInputType | true
    }
  >

  export interface SeatAssignementDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one SeatAssignement that matches the filter.
     * @param {SeatAssignementFindUniqueArgs} args - Arguments to find a SeatAssignement
     * @example
     * // Get one SeatAssignement
     * const seatAssignement = await prisma.seatAssignement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SeatAssignementFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SeatAssignementFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SeatAssignement'> extends True ? Prisma__SeatAssignementClient<SeatAssignementGetPayload<T>> : Prisma__SeatAssignementClient<SeatAssignementGetPayload<T> | null, null>

    /**
     * Find one SeatAssignement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SeatAssignementFindUniqueOrThrowArgs} args - Arguments to find a SeatAssignement
     * @example
     * // Get one SeatAssignement
     * const seatAssignement = await prisma.seatAssignement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SeatAssignementFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SeatAssignementFindUniqueOrThrowArgs>
    ): Prisma__SeatAssignementClient<SeatAssignementGetPayload<T>>

    /**
     * Find the first SeatAssignement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAssignementFindFirstArgs} args - Arguments to find a SeatAssignement
     * @example
     * // Get one SeatAssignement
     * const seatAssignement = await prisma.seatAssignement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SeatAssignementFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SeatAssignementFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SeatAssignement'> extends True ? Prisma__SeatAssignementClient<SeatAssignementGetPayload<T>> : Prisma__SeatAssignementClient<SeatAssignementGetPayload<T> | null, null>

    /**
     * Find the first SeatAssignement that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAssignementFindFirstOrThrowArgs} args - Arguments to find a SeatAssignement
     * @example
     * // Get one SeatAssignement
     * const seatAssignement = await prisma.seatAssignement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SeatAssignementFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SeatAssignementFindFirstOrThrowArgs>
    ): Prisma__SeatAssignementClient<SeatAssignementGetPayload<T>>

    /**
     * Find zero or more SeatAssignements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAssignementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SeatAssignements
     * const seatAssignements = await prisma.seatAssignement.findMany()
     * 
     * // Get first 10 SeatAssignements
     * const seatAssignements = await prisma.seatAssignement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatAssignementWithIdOnly = await prisma.seatAssignement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SeatAssignementFindManyArgs>(
      args?: SelectSubset<T, SeatAssignementFindManyArgs>
    ): PrismaPromise<Array<SeatAssignementGetPayload<T>>>

    /**
     * Create a SeatAssignement.
     * @param {SeatAssignementCreateArgs} args - Arguments to create a SeatAssignement.
     * @example
     * // Create one SeatAssignement
     * const SeatAssignement = await prisma.seatAssignement.create({
     *   data: {
     *     // ... data to create a SeatAssignement
     *   }
     * })
     * 
    **/
    create<T extends SeatAssignementCreateArgs>(
      args: SelectSubset<T, SeatAssignementCreateArgs>
    ): Prisma__SeatAssignementClient<SeatAssignementGetPayload<T>>

    /**
     * Create many SeatAssignements.
     *     @param {SeatAssignementCreateManyArgs} args - Arguments to create many SeatAssignements.
     *     @example
     *     // Create many SeatAssignements
     *     const seatAssignement = await prisma.seatAssignement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SeatAssignementCreateManyArgs>(
      args?: SelectSubset<T, SeatAssignementCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SeatAssignement.
     * @param {SeatAssignementDeleteArgs} args - Arguments to delete one SeatAssignement.
     * @example
     * // Delete one SeatAssignement
     * const SeatAssignement = await prisma.seatAssignement.delete({
     *   where: {
     *     // ... filter to delete one SeatAssignement
     *   }
     * })
     * 
    **/
    delete<T extends SeatAssignementDeleteArgs>(
      args: SelectSubset<T, SeatAssignementDeleteArgs>
    ): Prisma__SeatAssignementClient<SeatAssignementGetPayload<T>>

    /**
     * Update one SeatAssignement.
     * @param {SeatAssignementUpdateArgs} args - Arguments to update one SeatAssignement.
     * @example
     * // Update one SeatAssignement
     * const seatAssignement = await prisma.seatAssignement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SeatAssignementUpdateArgs>(
      args: SelectSubset<T, SeatAssignementUpdateArgs>
    ): Prisma__SeatAssignementClient<SeatAssignementGetPayload<T>>

    /**
     * Delete zero or more SeatAssignements.
     * @param {SeatAssignementDeleteManyArgs} args - Arguments to filter SeatAssignements to delete.
     * @example
     * // Delete a few SeatAssignements
     * const { count } = await prisma.seatAssignement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SeatAssignementDeleteManyArgs>(
      args?: SelectSubset<T, SeatAssignementDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SeatAssignements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAssignementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SeatAssignements
     * const seatAssignement = await prisma.seatAssignement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SeatAssignementUpdateManyArgs>(
      args: SelectSubset<T, SeatAssignementUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SeatAssignement.
     * @param {SeatAssignementUpsertArgs} args - Arguments to update or create a SeatAssignement.
     * @example
     * // Update or create a SeatAssignement
     * const seatAssignement = await prisma.seatAssignement.upsert({
     *   create: {
     *     // ... data to create a SeatAssignement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SeatAssignement we want to update
     *   }
     * })
    **/
    upsert<T extends SeatAssignementUpsertArgs>(
      args: SelectSubset<T, SeatAssignementUpsertArgs>
    ): Prisma__SeatAssignementClient<SeatAssignementGetPayload<T>>

    /**
     * Count the number of SeatAssignements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAssignementCountArgs} args - Arguments to filter SeatAssignements to count.
     * @example
     * // Count the number of SeatAssignements
     * const count = await prisma.seatAssignement.count({
     *   where: {
     *     // ... the filter for the SeatAssignements we want to count
     *   }
     * })
    **/
    count<T extends SeatAssignementCountArgs>(
      args?: Subset<T, SeatAssignementCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatAssignementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SeatAssignement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAssignementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeatAssignementAggregateArgs>(args: Subset<T, SeatAssignementAggregateArgs>): PrismaPromise<GetSeatAssignementAggregateType<T>>

    /**
     * Group by SeatAssignement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAssignementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeatAssignementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatAssignementGroupByArgs['orderBy'] }
        : { orderBy?: SeatAssignementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeatAssignementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatAssignementGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for SeatAssignement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SeatAssignementClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    pickupAddress<T extends AdressArgs= {}>(args?: Subset<T, AdressArgs>): Prisma__AdressClient<AdressGetPayload<T> | Null>;

    dropoffAddress<T extends AdressArgs= {}>(args?: Subset<T, AdressArgs>): Prisma__AdressClient<AdressGetPayload<T> | Null>;

    trip<T extends TripArgs= {}>(args?: Subset<T, TripArgs>): Prisma__TripClient<TripGetPayload<T> | Null>;

    passenger<T extends MobileUserArgs= {}>(args?: Subset<T, MobileUserArgs>): Prisma__MobileUserClient<MobileUserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * SeatAssignement base type for findUnique actions
   */
  export type SeatAssignementFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    /**
     * Filter, which SeatAssignement to fetch.
     * 
    **/
    where: SeatAssignementWhereUniqueInput
  }

  /**
   * SeatAssignement findUnique
   */
  export interface SeatAssignementFindUniqueArgs extends SeatAssignementFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SeatAssignement findUniqueOrThrow
   */
  export type SeatAssignementFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    /**
     * Filter, which SeatAssignement to fetch.
     * 
    **/
    where: SeatAssignementWhereUniqueInput
  }


  /**
   * SeatAssignement base type for findFirst actions
   */
  export type SeatAssignementFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    /**
     * Filter, which SeatAssignement to fetch.
     * 
    **/
    where?: SeatAssignementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatAssignements to fetch.
     * 
    **/
    orderBy?: Enumerable<SeatAssignementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeatAssignements.
     * 
    **/
    cursor?: SeatAssignementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatAssignements from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatAssignements.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeatAssignements.
     * 
    **/
    distinct?: Enumerable<SeatAssignementScalarFieldEnum>
  }

  /**
   * SeatAssignement findFirst
   */
  export interface SeatAssignementFindFirstArgs extends SeatAssignementFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * SeatAssignement findFirstOrThrow
   */
  export type SeatAssignementFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    /**
     * Filter, which SeatAssignement to fetch.
     * 
    **/
    where?: SeatAssignementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatAssignements to fetch.
     * 
    **/
    orderBy?: Enumerable<SeatAssignementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SeatAssignements.
     * 
    **/
    cursor?: SeatAssignementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatAssignements from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatAssignements.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SeatAssignements.
     * 
    **/
    distinct?: Enumerable<SeatAssignementScalarFieldEnum>
  }


  /**
   * SeatAssignement findMany
   */
  export type SeatAssignementFindManyArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    /**
     * Filter, which SeatAssignements to fetch.
     * 
    **/
    where?: SeatAssignementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SeatAssignements to fetch.
     * 
    **/
    orderBy?: Enumerable<SeatAssignementOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SeatAssignements.
     * 
    **/
    cursor?: SeatAssignementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SeatAssignements from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SeatAssignements.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SeatAssignementScalarFieldEnum>
  }


  /**
   * SeatAssignement create
   */
  export type SeatAssignementCreateArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    /**
     * The data needed to create a SeatAssignement.
     * 
    **/
    data: XOR<SeatAssignementCreateInput, SeatAssignementUncheckedCreateInput>
  }


  /**
   * SeatAssignement createMany
   */
  export type SeatAssignementCreateManyArgs = {
    /**
     * The data used to create many SeatAssignements.
     * 
    **/
    data: Enumerable<SeatAssignementCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SeatAssignement update
   */
  export type SeatAssignementUpdateArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    /**
     * The data needed to update a SeatAssignement.
     * 
    **/
    data: XOR<SeatAssignementUpdateInput, SeatAssignementUncheckedUpdateInput>
    /**
     * Choose, which SeatAssignement to update.
     * 
    **/
    where: SeatAssignementWhereUniqueInput
  }


  /**
   * SeatAssignement updateMany
   */
  export type SeatAssignementUpdateManyArgs = {
    /**
     * The data used to update SeatAssignements.
     * 
    **/
    data: XOR<SeatAssignementUpdateManyMutationInput, SeatAssignementUncheckedUpdateManyInput>
    /**
     * Filter which SeatAssignements to update
     * 
    **/
    where?: SeatAssignementWhereInput
  }


  /**
   * SeatAssignement upsert
   */
  export type SeatAssignementUpsertArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    /**
     * The filter to search for the SeatAssignement to update in case it exists.
     * 
    **/
    where: SeatAssignementWhereUniqueInput
    /**
     * In case the SeatAssignement found by the `where` argument doesn't exist, create a new SeatAssignement with this data.
     * 
    **/
    create: XOR<SeatAssignementCreateInput, SeatAssignementUncheckedCreateInput>
    /**
     * In case the SeatAssignement was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SeatAssignementUpdateInput, SeatAssignementUncheckedUpdateInput>
  }


  /**
   * SeatAssignement delete
   */
  export type SeatAssignementDeleteArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    /**
     * Filter which SeatAssignement to delete.
     * 
    **/
    where: SeatAssignementWhereUniqueInput
  }


  /**
   * SeatAssignement deleteMany
   */
  export type SeatAssignementDeleteManyArgs = {
    /**
     * Filter which SeatAssignements to delete
     * 
    **/
    where?: SeatAssignementWhereInput
  }


  /**
   * SeatAssignement without action
   */
  export type SeatAssignementArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
  }



  /**
   * Model Trip
   */


  export type AggregateTrip = {
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  export type TripAvgAggregateOutputType = {
    price: number | null
    rating: number | null
    maxPassengers: number | null
    actualDistance: number | null
  }

  export type TripSumAggregateOutputType = {
    price: number | null
    rating: number | null
    maxPassengers: number | null
    actualDistance: number | null
  }

  export type TripMinAggregateOutputType = {
    id: string | null
    driverId: string | null
    status: string | null
    price: number | null
    rating: number | null
    message: string | null
    startAddressId: string | null
    endAddressId: string | null
    maxPassengers: number | null
    estimatedStartTime: Date | null
    estimatedArrivalTime: Date | null
    actualDepartureTime: Date | null
    actualArrivalTime: Date | null
    actualDistance: number | null
    vehicleId: string | null
    description: string | null
  }

  export type TripMaxAggregateOutputType = {
    id: string | null
    driverId: string | null
    status: string | null
    price: number | null
    rating: number | null
    message: string | null
    startAddressId: string | null
    endAddressId: string | null
    maxPassengers: number | null
    estimatedStartTime: Date | null
    estimatedArrivalTime: Date | null
    actualDepartureTime: Date | null
    actualArrivalTime: Date | null
    actualDistance: number | null
    vehicleId: string | null
    description: string | null
  }

  export type TripCountAggregateOutputType = {
    id: number
    driverId: number
    status: number
    price: number
    rating: number
    message: number
    startAddressId: number
    endAddressId: number
    maxPassengers: number
    estimatedStartTime: number
    estimatedArrivalTime: number
    actualDepartureTime: number
    actualArrivalTime: number
    actualDistance: number
    vehicleId: number
    description: number
    _all: number
  }


  export type TripAvgAggregateInputType = {
    price?: true
    rating?: true
    maxPassengers?: true
    actualDistance?: true
  }

  export type TripSumAggregateInputType = {
    price?: true
    rating?: true
    maxPassengers?: true
    actualDistance?: true
  }

  export type TripMinAggregateInputType = {
    id?: true
    driverId?: true
    status?: true
    price?: true
    rating?: true
    message?: true
    startAddressId?: true
    endAddressId?: true
    maxPassengers?: true
    estimatedStartTime?: true
    estimatedArrivalTime?: true
    actualDepartureTime?: true
    actualArrivalTime?: true
    actualDistance?: true
    vehicleId?: true
    description?: true
  }

  export type TripMaxAggregateInputType = {
    id?: true
    driverId?: true
    status?: true
    price?: true
    rating?: true
    message?: true
    startAddressId?: true
    endAddressId?: true
    maxPassengers?: true
    estimatedStartTime?: true
    estimatedArrivalTime?: true
    actualDepartureTime?: true
    actualArrivalTime?: true
    actualDistance?: true
    vehicleId?: true
    description?: true
  }

  export type TripCountAggregateInputType = {
    id?: true
    driverId?: true
    status?: true
    price?: true
    rating?: true
    message?: true
    startAddressId?: true
    endAddressId?: true
    maxPassengers?: true
    estimatedStartTime?: true
    estimatedArrivalTime?: true
    actualDepartureTime?: true
    actualArrivalTime?: true
    actualDistance?: true
    vehicleId?: true
    description?: true
    _all?: true
  }

  export type TripAggregateArgs = {
    /**
     * Filter which Trip to aggregate.
     * 
    **/
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     * 
    **/
    orderBy?: Enumerable<TripOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trips
    **/
    _count?: true | TripCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TripAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TripSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TripMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TripMaxAggregateInputType
  }

  export type GetTripAggregateType<T extends TripAggregateArgs> = {
        [P in keyof T & keyof AggregateTrip]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrip[P]>
      : GetScalarType<T[P], AggregateTrip[P]>
  }




  export type TripGroupByArgs = {
    where?: TripWhereInput
    orderBy?: Enumerable<TripOrderByWithAggregationInput>
    by: Array<TripScalarFieldEnum>
    having?: TripScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TripCountAggregateInputType | true
    _avg?: TripAvgAggregateInputType
    _sum?: TripSumAggregateInputType
    _min?: TripMinAggregateInputType
    _max?: TripMaxAggregateInputType
  }


  export type TripGroupByOutputType = {
    id: string
    driverId: string
    status: string
    price: number
    rating: number | null
    message: string | null
    startAddressId: string
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date
    estimatedArrivalTime: Date
    actualDepartureTime: Date | null
    actualArrivalTime: Date | null
    actualDistance: number | null
    vehicleId: string
    description: string | null
    _count: TripCountAggregateOutputType | null
    _avg: TripAvgAggregateOutputType | null
    _sum: TripSumAggregateOutputType | null
    _min: TripMinAggregateOutputType | null
    _max: TripMaxAggregateOutputType | null
  }

  type GetTripGroupByPayload<T extends TripGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TripGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TripGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TripGroupByOutputType[P]>
            : GetScalarType<T[P], TripGroupByOutputType[P]>
        }
      >
    >


  export type TripSelect = {
    id?: boolean
    driver?: boolean | MobileUserArgs
    driverId?: boolean
    seatAssignments?: boolean | TripSeatAssignmentsArgs
    status?: boolean
    price?: boolean
    rating?: boolean
    message?: boolean
    startAddress?: boolean | AdressArgs
    startAddressId?: boolean
    endAddress?: boolean | AdressArgs
    endAddressId?: boolean
    maxPassengers?: boolean
    estimatedStartTime?: boolean
    estimatedArrivalTime?: boolean
    actualDepartureTime?: boolean
    actualArrivalTime?: boolean
    actualDistance?: boolean
    Vehicle?: boolean | VehicleArgs
    vehicleId?: boolean
    description?: boolean
    realtimeTripData?: boolean | TripRealtimeTripDataArgs
    _count?: boolean | TripCountOutputTypeArgs
  }


  export type TripInclude = {
    driver?: boolean | MobileUserArgs
    seatAssignments?: boolean | TripSeatAssignmentsArgs
    startAddress?: boolean | AdressArgs
    endAddress?: boolean | AdressArgs
    Vehicle?: boolean | VehicleArgs
    realtimeTripData?: boolean | TripRealtimeTripDataArgs
    _count?: boolean | TripCountOutputTypeArgs
  } 

  export type TripGetPayload<S extends boolean | null | undefined | TripArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Trip :
    S extends undefined ? never :
    S extends { include: any } & (TripArgs | TripFindManyArgs)
    ? Trip  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'driver' ? MobileUserGetPayload<S['include'][P]> :
        P extends 'seatAssignments' ? Array < SeatAssignementGetPayload<S['include'][P]>>  :
        P extends 'startAddress' ? AdressGetPayload<S['include'][P]> :
        P extends 'endAddress' ? AdressGetPayload<S['include'][P]> :
        P extends 'Vehicle' ? VehicleGetPayload<S['include'][P]> :
        P extends 'realtimeTripData' ? Array < RealtimeTripDataGetPayload<S['include'][P]>>  :
        P extends '_count' ? TripCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TripArgs | TripFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'driver' ? MobileUserGetPayload<S['select'][P]> :
        P extends 'seatAssignments' ? Array < SeatAssignementGetPayload<S['select'][P]>>  :
        P extends 'startAddress' ? AdressGetPayload<S['select'][P]> :
        P extends 'endAddress' ? AdressGetPayload<S['select'][P]> :
        P extends 'Vehicle' ? VehicleGetPayload<S['select'][P]> :
        P extends 'realtimeTripData' ? Array < RealtimeTripDataGetPayload<S['select'][P]>>  :
        P extends '_count' ? TripCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Trip ? Trip[P] : never
  } 
      : Trip


  type TripCountArgs = Merge<
    Omit<TripFindManyArgs, 'select' | 'include'> & {
      select?: TripCountAggregateInputType | true
    }
  >

  export interface TripDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Trip that matches the filter.
     * @param {TripFindUniqueArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TripFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TripFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Trip'> extends True ? Prisma__TripClient<TripGetPayload<T>> : Prisma__TripClient<TripGetPayload<T> | null, null>

    /**
     * Find one Trip that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TripFindUniqueOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TripFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TripFindUniqueOrThrowArgs>
    ): Prisma__TripClient<TripGetPayload<T>>

    /**
     * Find the first Trip that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TripFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TripFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Trip'> extends True ? Prisma__TripClient<TripGetPayload<T>> : Prisma__TripClient<TripGetPayload<T> | null, null>

    /**
     * Find the first Trip that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindFirstOrThrowArgs} args - Arguments to find a Trip
     * @example
     * // Get one Trip
     * const trip = await prisma.trip.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TripFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TripFindFirstOrThrowArgs>
    ): Prisma__TripClient<TripGetPayload<T>>

    /**
     * Find zero or more Trips that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trips
     * const trips = await prisma.trip.findMany()
     * 
     * // Get first 10 Trips
     * const trips = await prisma.trip.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tripWithIdOnly = await prisma.trip.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TripFindManyArgs>(
      args?: SelectSubset<T, TripFindManyArgs>
    ): PrismaPromise<Array<TripGetPayload<T>>>

    /**
     * Create a Trip.
     * @param {TripCreateArgs} args - Arguments to create a Trip.
     * @example
     * // Create one Trip
     * const Trip = await prisma.trip.create({
     *   data: {
     *     // ... data to create a Trip
     *   }
     * })
     * 
    **/
    create<T extends TripCreateArgs>(
      args: SelectSubset<T, TripCreateArgs>
    ): Prisma__TripClient<TripGetPayload<T>>

    /**
     * Create many Trips.
     *     @param {TripCreateManyArgs} args - Arguments to create many Trips.
     *     @example
     *     // Create many Trips
     *     const trip = await prisma.trip.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TripCreateManyArgs>(
      args?: SelectSubset<T, TripCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Trip.
     * @param {TripDeleteArgs} args - Arguments to delete one Trip.
     * @example
     * // Delete one Trip
     * const Trip = await prisma.trip.delete({
     *   where: {
     *     // ... filter to delete one Trip
     *   }
     * })
     * 
    **/
    delete<T extends TripDeleteArgs>(
      args: SelectSubset<T, TripDeleteArgs>
    ): Prisma__TripClient<TripGetPayload<T>>

    /**
     * Update one Trip.
     * @param {TripUpdateArgs} args - Arguments to update one Trip.
     * @example
     * // Update one Trip
     * const trip = await prisma.trip.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TripUpdateArgs>(
      args: SelectSubset<T, TripUpdateArgs>
    ): Prisma__TripClient<TripGetPayload<T>>

    /**
     * Delete zero or more Trips.
     * @param {TripDeleteManyArgs} args - Arguments to filter Trips to delete.
     * @example
     * // Delete a few Trips
     * const { count } = await prisma.trip.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TripDeleteManyArgs>(
      args?: SelectSubset<T, TripDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trips
     * const trip = await prisma.trip.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TripUpdateManyArgs>(
      args: SelectSubset<T, TripUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Trip.
     * @param {TripUpsertArgs} args - Arguments to update or create a Trip.
     * @example
     * // Update or create a Trip
     * const trip = await prisma.trip.upsert({
     *   create: {
     *     // ... data to create a Trip
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trip we want to update
     *   }
     * })
    **/
    upsert<T extends TripUpsertArgs>(
      args: SelectSubset<T, TripUpsertArgs>
    ): Prisma__TripClient<TripGetPayload<T>>

    /**
     * Count the number of Trips.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripCountArgs} args - Arguments to filter Trips to count.
     * @example
     * // Count the number of Trips
     * const count = await prisma.trip.count({
     *   where: {
     *     // ... the filter for the Trips we want to count
     *   }
     * })
    **/
    count<T extends TripCountArgs>(
      args?: Subset<T, TripCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TripCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TripAggregateArgs>(args: Subset<T, TripAggregateArgs>): PrismaPromise<GetTripAggregateType<T>>

    /**
     * Group by Trip.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TripGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TripGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TripGroupByArgs['orderBy'] }
        : { orderBy?: TripGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TripGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTripGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Trip.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TripClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    driver<T extends MobileUserArgs= {}>(args?: Subset<T, MobileUserArgs>): Prisma__MobileUserClient<MobileUserGetPayload<T> | Null>;

    seatAssignments<T extends TripSeatAssignmentsArgs= {}>(args?: Subset<T, TripSeatAssignmentsArgs>): PrismaPromise<Array<SeatAssignementGetPayload<T>>| Null>;

    startAddress<T extends AdressArgs= {}>(args?: Subset<T, AdressArgs>): Prisma__AdressClient<AdressGetPayload<T> | Null>;

    endAddress<T extends AdressArgs= {}>(args?: Subset<T, AdressArgs>): Prisma__AdressClient<AdressGetPayload<T> | Null>;

    Vehicle<T extends VehicleArgs= {}>(args?: Subset<T, VehicleArgs>): Prisma__VehicleClient<VehicleGetPayload<T> | Null>;

    realtimeTripData<T extends TripRealtimeTripDataArgs= {}>(args?: Subset<T, TripRealtimeTripDataArgs>): PrismaPromise<Array<RealtimeTripDataGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Trip base type for findUnique actions
   */
  export type TripFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    /**
     * Filter, which Trip to fetch.
     * 
    **/
    where: TripWhereUniqueInput
  }

  /**
   * Trip findUnique
   */
  export interface TripFindUniqueArgs extends TripFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Trip findUniqueOrThrow
   */
  export type TripFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    /**
     * Filter, which Trip to fetch.
     * 
    **/
    where: TripWhereUniqueInput
  }


  /**
   * Trip base type for findFirst actions
   */
  export type TripFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    /**
     * Filter, which Trip to fetch.
     * 
    **/
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     * 
    **/
    orderBy?: Enumerable<TripOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     * 
    **/
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     * 
    **/
    distinct?: Enumerable<TripScalarFieldEnum>
  }

  /**
   * Trip findFirst
   */
  export interface TripFindFirstArgs extends TripFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Trip findFirstOrThrow
   */
  export type TripFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    /**
     * Filter, which Trip to fetch.
     * 
    **/
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     * 
    **/
    orderBy?: Enumerable<TripOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trips.
     * 
    **/
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trips.
     * 
    **/
    distinct?: Enumerable<TripScalarFieldEnum>
  }


  /**
   * Trip findMany
   */
  export type TripFindManyArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    /**
     * Filter, which Trips to fetch.
     * 
    **/
    where?: TripWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trips to fetch.
     * 
    **/
    orderBy?: Enumerable<TripOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trips.
     * 
    **/
    cursor?: TripWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trips from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trips.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TripScalarFieldEnum>
  }


  /**
   * Trip create
   */
  export type TripCreateArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    /**
     * The data needed to create a Trip.
     * 
    **/
    data: XOR<TripCreateInput, TripUncheckedCreateInput>
  }


  /**
   * Trip createMany
   */
  export type TripCreateManyArgs = {
    /**
     * The data used to create many Trips.
     * 
    **/
    data: Enumerable<TripCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Trip update
   */
  export type TripUpdateArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    /**
     * The data needed to update a Trip.
     * 
    **/
    data: XOR<TripUpdateInput, TripUncheckedUpdateInput>
    /**
     * Choose, which Trip to update.
     * 
    **/
    where: TripWhereUniqueInput
  }


  /**
   * Trip updateMany
   */
  export type TripUpdateManyArgs = {
    /**
     * The data used to update Trips.
     * 
    **/
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyInput>
    /**
     * Filter which Trips to update
     * 
    **/
    where?: TripWhereInput
  }


  /**
   * Trip upsert
   */
  export type TripUpsertArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    /**
     * The filter to search for the Trip to update in case it exists.
     * 
    **/
    where: TripWhereUniqueInput
    /**
     * In case the Trip found by the `where` argument doesn't exist, create a new Trip with this data.
     * 
    **/
    create: XOR<TripCreateInput, TripUncheckedCreateInput>
    /**
     * In case the Trip was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TripUpdateInput, TripUncheckedUpdateInput>
  }


  /**
   * Trip delete
   */
  export type TripDeleteArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
    /**
     * Filter which Trip to delete.
     * 
    **/
    where: TripWhereUniqueInput
  }


  /**
   * Trip deleteMany
   */
  export type TripDeleteManyArgs = {
    /**
     * Filter which Trips to delete
     * 
    **/
    where?: TripWhereInput
  }


  /**
   * Trip.seatAssignments
   */
  export type TripSeatAssignmentsArgs = {
    /**
     * Select specific fields to fetch from the SeatAssignement
     * 
    **/
    select?: SeatAssignementSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SeatAssignementInclude | null
    where?: SeatAssignementWhereInput
    orderBy?: Enumerable<SeatAssignementOrderByWithRelationInput>
    cursor?: SeatAssignementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SeatAssignementScalarFieldEnum>
  }


  /**
   * Trip.realtimeTripData
   */
  export type TripRealtimeTripDataArgs = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    where?: RealtimeTripDataWhereInput
    orderBy?: Enumerable<RealtimeTripDataOrderByWithRelationInput>
    cursor?: RealtimeTripDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RealtimeTripDataScalarFieldEnum>
  }


  /**
   * Trip without action
   */
  export type TripArgs = {
    /**
     * Select specific fields to fetch from the Trip
     * 
    **/
    select?: TripSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TripInclude | null
  }



  /**
   * Model AOI
   */


  export type AggregateAOI = {
    _count: AOICountAggregateOutputType | null
    _min: AOIMinAggregateOutputType | null
    _max: AOIMaxAggregateOutputType | null
  }

  export type AOIMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AOIMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type AOICountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AOIMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AOIMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AOICountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AOIAggregateArgs = {
    /**
     * Filter which AOI to aggregate.
     * 
    **/
    where?: AOIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AOIS to fetch.
     * 
    **/
    orderBy?: Enumerable<AOIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AOIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AOIS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AOIS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AOIS
    **/
    _count?: true | AOICountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AOIMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AOIMaxAggregateInputType
  }

  export type GetAOIAggregateType<T extends AOIAggregateArgs> = {
        [P in keyof T & keyof AggregateAOI]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAOI[P]>
      : GetScalarType<T[P], AggregateAOI[P]>
  }




  export type AOIGroupByArgs = {
    where?: AOIWhereInput
    orderBy?: Enumerable<AOIOrderByWithAggregationInput>
    by: Array<AOIScalarFieldEnum>
    having?: AOIScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AOICountAggregateInputType | true
    _min?: AOIMinAggregateInputType
    _max?: AOIMaxAggregateInputType
  }


  export type AOIGroupByOutputType = {
    id: string
    name: string
    _count: AOICountAggregateOutputType | null
    _min: AOIMinAggregateOutputType | null
    _max: AOIMaxAggregateOutputType | null
  }

  type GetAOIGroupByPayload<T extends AOIGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AOIGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AOIGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AOIGroupByOutputType[P]>
            : GetScalarType<T[P], AOIGroupByOutputType[P]>
        }
      >
    >


  export type AOISelect = {
    id?: boolean
    name?: boolean
    coordinates?: boolean | AOICoordinatesArgs
    _count?: boolean | AOICountOutputTypeArgs
  }


  export type AOIInclude = {
    coordinates?: boolean | AOICoordinatesArgs
    _count?: boolean | AOICountOutputTypeArgs
  } 

  export type AOIGetPayload<S extends boolean | null | undefined | AOIArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AOI :
    S extends undefined ? never :
    S extends { include: any } & (AOIArgs | AOIFindManyArgs)
    ? AOI  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'coordinates' ? Array < CoordinatesGetPayload<S['include'][P]>>  :
        P extends '_count' ? AOICountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AOIArgs | AOIFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'coordinates' ? Array < CoordinatesGetPayload<S['select'][P]>>  :
        P extends '_count' ? AOICountOutputTypeGetPayload<S['select'][P]> :  P extends keyof AOI ? AOI[P] : never
  } 
      : AOI


  type AOICountArgs = Merge<
    Omit<AOIFindManyArgs, 'select' | 'include'> & {
      select?: AOICountAggregateInputType | true
    }
  >

  export interface AOIDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one AOI that matches the filter.
     * @param {AOIFindUniqueArgs} args - Arguments to find a AOI
     * @example
     * // Get one AOI
     * const aOI = await prisma.aOI.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AOIFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AOIFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AOI'> extends True ? Prisma__AOIClient<AOIGetPayload<T>> : Prisma__AOIClient<AOIGetPayload<T> | null, null>

    /**
     * Find one AOI that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AOIFindUniqueOrThrowArgs} args - Arguments to find a AOI
     * @example
     * // Get one AOI
     * const aOI = await prisma.aOI.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AOIFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AOIFindUniqueOrThrowArgs>
    ): Prisma__AOIClient<AOIGetPayload<T>>

    /**
     * Find the first AOI that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AOIFindFirstArgs} args - Arguments to find a AOI
     * @example
     * // Get one AOI
     * const aOI = await prisma.aOI.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AOIFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AOIFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AOI'> extends True ? Prisma__AOIClient<AOIGetPayload<T>> : Prisma__AOIClient<AOIGetPayload<T> | null, null>

    /**
     * Find the first AOI that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AOIFindFirstOrThrowArgs} args - Arguments to find a AOI
     * @example
     * // Get one AOI
     * const aOI = await prisma.aOI.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AOIFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AOIFindFirstOrThrowArgs>
    ): Prisma__AOIClient<AOIGetPayload<T>>

    /**
     * Find zero or more AOIS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AOIFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AOIS
     * const aOIS = await prisma.aOI.findMany()
     * 
     * // Get first 10 AOIS
     * const aOIS = await prisma.aOI.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aOIWithIdOnly = await prisma.aOI.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AOIFindManyArgs>(
      args?: SelectSubset<T, AOIFindManyArgs>
    ): PrismaPromise<Array<AOIGetPayload<T>>>

    /**
     * Create a AOI.
     * @param {AOICreateArgs} args - Arguments to create a AOI.
     * @example
     * // Create one AOI
     * const AOI = await prisma.aOI.create({
     *   data: {
     *     // ... data to create a AOI
     *   }
     * })
     * 
    **/
    create<T extends AOICreateArgs>(
      args: SelectSubset<T, AOICreateArgs>
    ): Prisma__AOIClient<AOIGetPayload<T>>

    /**
     * Create many AOIS.
     *     @param {AOICreateManyArgs} args - Arguments to create many AOIS.
     *     @example
     *     // Create many AOIS
     *     const aOI = await prisma.aOI.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AOICreateManyArgs>(
      args?: SelectSubset<T, AOICreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a AOI.
     * @param {AOIDeleteArgs} args - Arguments to delete one AOI.
     * @example
     * // Delete one AOI
     * const AOI = await prisma.aOI.delete({
     *   where: {
     *     // ... filter to delete one AOI
     *   }
     * })
     * 
    **/
    delete<T extends AOIDeleteArgs>(
      args: SelectSubset<T, AOIDeleteArgs>
    ): Prisma__AOIClient<AOIGetPayload<T>>

    /**
     * Update one AOI.
     * @param {AOIUpdateArgs} args - Arguments to update one AOI.
     * @example
     * // Update one AOI
     * const aOI = await prisma.aOI.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AOIUpdateArgs>(
      args: SelectSubset<T, AOIUpdateArgs>
    ): Prisma__AOIClient<AOIGetPayload<T>>

    /**
     * Delete zero or more AOIS.
     * @param {AOIDeleteManyArgs} args - Arguments to filter AOIS to delete.
     * @example
     * // Delete a few AOIS
     * const { count } = await prisma.aOI.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AOIDeleteManyArgs>(
      args?: SelectSubset<T, AOIDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more AOIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AOIUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AOIS
     * const aOI = await prisma.aOI.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AOIUpdateManyArgs>(
      args: SelectSubset<T, AOIUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one AOI.
     * @param {AOIUpsertArgs} args - Arguments to update or create a AOI.
     * @example
     * // Update or create a AOI
     * const aOI = await prisma.aOI.upsert({
     *   create: {
     *     // ... data to create a AOI
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AOI we want to update
     *   }
     * })
    **/
    upsert<T extends AOIUpsertArgs>(
      args: SelectSubset<T, AOIUpsertArgs>
    ): Prisma__AOIClient<AOIGetPayload<T>>

    /**
     * Count the number of AOIS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AOICountArgs} args - Arguments to filter AOIS to count.
     * @example
     * // Count the number of AOIS
     * const count = await prisma.aOI.count({
     *   where: {
     *     // ... the filter for the AOIS we want to count
     *   }
     * })
    **/
    count<T extends AOICountArgs>(
      args?: Subset<T, AOICountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AOICountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AOI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AOIAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AOIAggregateArgs>(args: Subset<T, AOIAggregateArgs>): PrismaPromise<GetAOIAggregateType<T>>

    /**
     * Group by AOI.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AOIGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AOIGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AOIGroupByArgs['orderBy'] }
        : { orderBy?: AOIGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AOIGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAOIGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AOI.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AOIClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    coordinates<T extends AOICoordinatesArgs= {}>(args?: Subset<T, AOICoordinatesArgs>): PrismaPromise<Array<CoordinatesGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AOI base type for findUnique actions
   */
  export type AOIFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
    /**
     * Filter, which AOI to fetch.
     * 
    **/
    where: AOIWhereUniqueInput
  }

  /**
   * AOI findUnique
   */
  export interface AOIFindUniqueArgs extends AOIFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AOI findUniqueOrThrow
   */
  export type AOIFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
    /**
     * Filter, which AOI to fetch.
     * 
    **/
    where: AOIWhereUniqueInput
  }


  /**
   * AOI base type for findFirst actions
   */
  export type AOIFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
    /**
     * Filter, which AOI to fetch.
     * 
    **/
    where?: AOIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AOIS to fetch.
     * 
    **/
    orderBy?: Enumerable<AOIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AOIS.
     * 
    **/
    cursor?: AOIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AOIS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AOIS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AOIS.
     * 
    **/
    distinct?: Enumerable<AOIScalarFieldEnum>
  }

  /**
   * AOI findFirst
   */
  export interface AOIFindFirstArgs extends AOIFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AOI findFirstOrThrow
   */
  export type AOIFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
    /**
     * Filter, which AOI to fetch.
     * 
    **/
    where?: AOIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AOIS to fetch.
     * 
    **/
    orderBy?: Enumerable<AOIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AOIS.
     * 
    **/
    cursor?: AOIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AOIS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AOIS.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AOIS.
     * 
    **/
    distinct?: Enumerable<AOIScalarFieldEnum>
  }


  /**
   * AOI findMany
   */
  export type AOIFindManyArgs = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
    /**
     * Filter, which AOIS to fetch.
     * 
    **/
    where?: AOIWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AOIS to fetch.
     * 
    **/
    orderBy?: Enumerable<AOIOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AOIS.
     * 
    **/
    cursor?: AOIWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AOIS from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AOIS.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AOIScalarFieldEnum>
  }


  /**
   * AOI create
   */
  export type AOICreateArgs = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
    /**
     * The data needed to create a AOI.
     * 
    **/
    data: XOR<AOICreateInput, AOIUncheckedCreateInput>
  }


  /**
   * AOI createMany
   */
  export type AOICreateManyArgs = {
    /**
     * The data used to create many AOIS.
     * 
    **/
    data: Enumerable<AOICreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AOI update
   */
  export type AOIUpdateArgs = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
    /**
     * The data needed to update a AOI.
     * 
    **/
    data: XOR<AOIUpdateInput, AOIUncheckedUpdateInput>
    /**
     * Choose, which AOI to update.
     * 
    **/
    where: AOIWhereUniqueInput
  }


  /**
   * AOI updateMany
   */
  export type AOIUpdateManyArgs = {
    /**
     * The data used to update AOIS.
     * 
    **/
    data: XOR<AOIUpdateManyMutationInput, AOIUncheckedUpdateManyInput>
    /**
     * Filter which AOIS to update
     * 
    **/
    where?: AOIWhereInput
  }


  /**
   * AOI upsert
   */
  export type AOIUpsertArgs = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
    /**
     * The filter to search for the AOI to update in case it exists.
     * 
    **/
    where: AOIWhereUniqueInput
    /**
     * In case the AOI found by the `where` argument doesn't exist, create a new AOI with this data.
     * 
    **/
    create: XOR<AOICreateInput, AOIUncheckedCreateInput>
    /**
     * In case the AOI was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AOIUpdateInput, AOIUncheckedUpdateInput>
  }


  /**
   * AOI delete
   */
  export type AOIDeleteArgs = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
    /**
     * Filter which AOI to delete.
     * 
    **/
    where: AOIWhereUniqueInput
  }


  /**
   * AOI deleteMany
   */
  export type AOIDeleteManyArgs = {
    /**
     * Filter which AOIS to delete
     * 
    **/
    where?: AOIWhereInput
  }


  /**
   * AOI.coordinates
   */
  export type AOICoordinatesArgs = {
    /**
     * Select specific fields to fetch from the Coordinates
     * 
    **/
    select?: CoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CoordinatesInclude | null
    where?: CoordinatesWhereInput
    orderBy?: Enumerable<CoordinatesOrderByWithRelationInput>
    cursor?: CoordinatesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CoordinatesScalarFieldEnum>
  }


  /**
   * AOI without action
   */
  export type AOIArgs = {
    /**
     * Select specific fields to fetch from the AOI
     * 
    **/
    select?: AOISelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: AOIInclude | null
  }



  /**
   * Model RealtimeTripData
   */


  export type AggregateRealtimeTripData = {
    _count: RealtimeTripDataCountAggregateOutputType | null
    _avg: RealtimeTripDataAvgAggregateOutputType | null
    _sum: RealtimeTripDataSumAggregateOutputType | null
    _min: RealtimeTripDataMinAggregateOutputType | null
    _max: RealtimeTripDataMaxAggregateOutputType | null
  }

  export type RealtimeTripDataAvgAggregateOutputType = {
    seats: number | null
    coordinatesId: number | null
  }

  export type RealtimeTripDataSumAggregateOutputType = {
    seats: number | null
    coordinatesId: number | null
  }

  export type RealtimeTripDataMinAggregateOutputType = {
    id: string | null
    tripId: string | null
    timestamp: Date | null
    seats: number | null
    provider: string | null
    mocked: boolean | null
    coordinatesId: number | null
  }

  export type RealtimeTripDataMaxAggregateOutputType = {
    id: string | null
    tripId: string | null
    timestamp: Date | null
    seats: number | null
    provider: string | null
    mocked: boolean | null
    coordinatesId: number | null
  }

  export type RealtimeTripDataCountAggregateOutputType = {
    id: number
    tripId: number
    timestamp: number
    seats: number
    provider: number
    mocked: number
    coordinatesId: number
    _all: number
  }


  export type RealtimeTripDataAvgAggregateInputType = {
    seats?: true
    coordinatesId?: true
  }

  export type RealtimeTripDataSumAggregateInputType = {
    seats?: true
    coordinatesId?: true
  }

  export type RealtimeTripDataMinAggregateInputType = {
    id?: true
    tripId?: true
    timestamp?: true
    seats?: true
    provider?: true
    mocked?: true
    coordinatesId?: true
  }

  export type RealtimeTripDataMaxAggregateInputType = {
    id?: true
    tripId?: true
    timestamp?: true
    seats?: true
    provider?: true
    mocked?: true
    coordinatesId?: true
  }

  export type RealtimeTripDataCountAggregateInputType = {
    id?: true
    tripId?: true
    timestamp?: true
    seats?: true
    provider?: true
    mocked?: true
    coordinatesId?: true
    _all?: true
  }

  export type RealtimeTripDataAggregateArgs = {
    /**
     * Filter which RealtimeTripData to aggregate.
     * 
    **/
    where?: RealtimeTripDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeTripData to fetch.
     * 
    **/
    orderBy?: Enumerable<RealtimeTripDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RealtimeTripDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeTripData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeTripData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealtimeTripData
    **/
    _count?: true | RealtimeTripDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RealtimeTripDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RealtimeTripDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealtimeTripDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealtimeTripDataMaxAggregateInputType
  }

  export type GetRealtimeTripDataAggregateType<T extends RealtimeTripDataAggregateArgs> = {
        [P in keyof T & keyof AggregateRealtimeTripData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealtimeTripData[P]>
      : GetScalarType<T[P], AggregateRealtimeTripData[P]>
  }




  export type RealtimeTripDataGroupByArgs = {
    where?: RealtimeTripDataWhereInput
    orderBy?: Enumerable<RealtimeTripDataOrderByWithAggregationInput>
    by: Array<RealtimeTripDataScalarFieldEnum>
    having?: RealtimeTripDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealtimeTripDataCountAggregateInputType | true
    _avg?: RealtimeTripDataAvgAggregateInputType
    _sum?: RealtimeTripDataSumAggregateInputType
    _min?: RealtimeTripDataMinAggregateInputType
    _max?: RealtimeTripDataMaxAggregateInputType
  }


  export type RealtimeTripDataGroupByOutputType = {
    id: string
    tripId: string
    timestamp: Date
    seats: number
    provider: string
    mocked: boolean
    coordinatesId: number
    _count: RealtimeTripDataCountAggregateOutputType | null
    _avg: RealtimeTripDataAvgAggregateOutputType | null
    _sum: RealtimeTripDataSumAggregateOutputType | null
    _min: RealtimeTripDataMinAggregateOutputType | null
    _max: RealtimeTripDataMaxAggregateOutputType | null
  }

  type GetRealtimeTripDataGroupByPayload<T extends RealtimeTripDataGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RealtimeTripDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealtimeTripDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealtimeTripDataGroupByOutputType[P]>
            : GetScalarType<T[P], RealtimeTripDataGroupByOutputType[P]>
        }
      >
    >


  export type RealtimeTripDataSelect = {
    id?: boolean
    trip?: boolean | TripArgs
    tripId?: boolean
    timestamp?: boolean
    seats?: boolean
    provider?: boolean
    mocked?: boolean
    coordinates?: boolean | RealtimeCoordinatesArgs
    coordinatesId?: boolean
  }


  export type RealtimeTripDataInclude = {
    trip?: boolean | TripArgs
    coordinates?: boolean | RealtimeCoordinatesArgs
  } 

  export type RealtimeTripDataGetPayload<S extends boolean | null | undefined | RealtimeTripDataArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealtimeTripData :
    S extends undefined ? never :
    S extends { include: any } & (RealtimeTripDataArgs | RealtimeTripDataFindManyArgs)
    ? RealtimeTripData  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'trip' ? TripGetPayload<S['include'][P]> :
        P extends 'coordinates' ? RealtimeCoordinatesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RealtimeTripDataArgs | RealtimeTripDataFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'trip' ? TripGetPayload<S['select'][P]> :
        P extends 'coordinates' ? RealtimeCoordinatesGetPayload<S['select'][P]> :  P extends keyof RealtimeTripData ? RealtimeTripData[P] : never
  } 
      : RealtimeTripData


  type RealtimeTripDataCountArgs = Merge<
    Omit<RealtimeTripDataFindManyArgs, 'select' | 'include'> & {
      select?: RealtimeTripDataCountAggregateInputType | true
    }
  >

  export interface RealtimeTripDataDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one RealtimeTripData that matches the filter.
     * @param {RealtimeTripDataFindUniqueArgs} args - Arguments to find a RealtimeTripData
     * @example
     * // Get one RealtimeTripData
     * const realtimeTripData = await prisma.realtimeTripData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RealtimeTripDataFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RealtimeTripDataFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RealtimeTripData'> extends True ? Prisma__RealtimeTripDataClient<RealtimeTripDataGetPayload<T>> : Prisma__RealtimeTripDataClient<RealtimeTripDataGetPayload<T> | null, null>

    /**
     * Find one RealtimeTripData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RealtimeTripDataFindUniqueOrThrowArgs} args - Arguments to find a RealtimeTripData
     * @example
     * // Get one RealtimeTripData
     * const realtimeTripData = await prisma.realtimeTripData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RealtimeTripDataFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RealtimeTripDataFindUniqueOrThrowArgs>
    ): Prisma__RealtimeTripDataClient<RealtimeTripDataGetPayload<T>>

    /**
     * Find the first RealtimeTripData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeTripDataFindFirstArgs} args - Arguments to find a RealtimeTripData
     * @example
     * // Get one RealtimeTripData
     * const realtimeTripData = await prisma.realtimeTripData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RealtimeTripDataFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RealtimeTripDataFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RealtimeTripData'> extends True ? Prisma__RealtimeTripDataClient<RealtimeTripDataGetPayload<T>> : Prisma__RealtimeTripDataClient<RealtimeTripDataGetPayload<T> | null, null>

    /**
     * Find the first RealtimeTripData that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeTripDataFindFirstOrThrowArgs} args - Arguments to find a RealtimeTripData
     * @example
     * // Get one RealtimeTripData
     * const realtimeTripData = await prisma.realtimeTripData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RealtimeTripDataFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RealtimeTripDataFindFirstOrThrowArgs>
    ): Prisma__RealtimeTripDataClient<RealtimeTripDataGetPayload<T>>

    /**
     * Find zero or more RealtimeTripData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeTripDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealtimeTripData
     * const realtimeTripData = await prisma.realtimeTripData.findMany()
     * 
     * // Get first 10 RealtimeTripData
     * const realtimeTripData = await prisma.realtimeTripData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realtimeTripDataWithIdOnly = await prisma.realtimeTripData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RealtimeTripDataFindManyArgs>(
      args?: SelectSubset<T, RealtimeTripDataFindManyArgs>
    ): PrismaPromise<Array<RealtimeTripDataGetPayload<T>>>

    /**
     * Create a RealtimeTripData.
     * @param {RealtimeTripDataCreateArgs} args - Arguments to create a RealtimeTripData.
     * @example
     * // Create one RealtimeTripData
     * const RealtimeTripData = await prisma.realtimeTripData.create({
     *   data: {
     *     // ... data to create a RealtimeTripData
     *   }
     * })
     * 
    **/
    create<T extends RealtimeTripDataCreateArgs>(
      args: SelectSubset<T, RealtimeTripDataCreateArgs>
    ): Prisma__RealtimeTripDataClient<RealtimeTripDataGetPayload<T>>

    /**
     * Create many RealtimeTripData.
     *     @param {RealtimeTripDataCreateManyArgs} args - Arguments to create many RealtimeTripData.
     *     @example
     *     // Create many RealtimeTripData
     *     const realtimeTripData = await prisma.realtimeTripData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RealtimeTripDataCreateManyArgs>(
      args?: SelectSubset<T, RealtimeTripDataCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RealtimeTripData.
     * @param {RealtimeTripDataDeleteArgs} args - Arguments to delete one RealtimeTripData.
     * @example
     * // Delete one RealtimeTripData
     * const RealtimeTripData = await prisma.realtimeTripData.delete({
     *   where: {
     *     // ... filter to delete one RealtimeTripData
     *   }
     * })
     * 
    **/
    delete<T extends RealtimeTripDataDeleteArgs>(
      args: SelectSubset<T, RealtimeTripDataDeleteArgs>
    ): Prisma__RealtimeTripDataClient<RealtimeTripDataGetPayload<T>>

    /**
     * Update one RealtimeTripData.
     * @param {RealtimeTripDataUpdateArgs} args - Arguments to update one RealtimeTripData.
     * @example
     * // Update one RealtimeTripData
     * const realtimeTripData = await prisma.realtimeTripData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RealtimeTripDataUpdateArgs>(
      args: SelectSubset<T, RealtimeTripDataUpdateArgs>
    ): Prisma__RealtimeTripDataClient<RealtimeTripDataGetPayload<T>>

    /**
     * Delete zero or more RealtimeTripData.
     * @param {RealtimeTripDataDeleteManyArgs} args - Arguments to filter RealtimeTripData to delete.
     * @example
     * // Delete a few RealtimeTripData
     * const { count } = await prisma.realtimeTripData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RealtimeTripDataDeleteManyArgs>(
      args?: SelectSubset<T, RealtimeTripDataDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealtimeTripData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeTripDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealtimeTripData
     * const realtimeTripData = await prisma.realtimeTripData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RealtimeTripDataUpdateManyArgs>(
      args: SelectSubset<T, RealtimeTripDataUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RealtimeTripData.
     * @param {RealtimeTripDataUpsertArgs} args - Arguments to update or create a RealtimeTripData.
     * @example
     * // Update or create a RealtimeTripData
     * const realtimeTripData = await prisma.realtimeTripData.upsert({
     *   create: {
     *     // ... data to create a RealtimeTripData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealtimeTripData we want to update
     *   }
     * })
    **/
    upsert<T extends RealtimeTripDataUpsertArgs>(
      args: SelectSubset<T, RealtimeTripDataUpsertArgs>
    ): Prisma__RealtimeTripDataClient<RealtimeTripDataGetPayload<T>>

    /**
     * Count the number of RealtimeTripData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeTripDataCountArgs} args - Arguments to filter RealtimeTripData to count.
     * @example
     * // Count the number of RealtimeTripData
     * const count = await prisma.realtimeTripData.count({
     *   where: {
     *     // ... the filter for the RealtimeTripData we want to count
     *   }
     * })
    **/
    count<T extends RealtimeTripDataCountArgs>(
      args?: Subset<T, RealtimeTripDataCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealtimeTripDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealtimeTripData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeTripDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RealtimeTripDataAggregateArgs>(args: Subset<T, RealtimeTripDataAggregateArgs>): PrismaPromise<GetRealtimeTripDataAggregateType<T>>

    /**
     * Group by RealtimeTripData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeTripDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RealtimeTripDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealtimeTripDataGroupByArgs['orderBy'] }
        : { orderBy?: RealtimeTripDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RealtimeTripDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealtimeTripDataGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RealtimeTripData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RealtimeTripDataClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    trip<T extends TripArgs= {}>(args?: Subset<T, TripArgs>): Prisma__TripClient<TripGetPayload<T> | Null>;

    coordinates<T extends RealtimeCoordinatesArgs= {}>(args?: Subset<T, RealtimeCoordinatesArgs>): Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RealtimeTripData base type for findUnique actions
   */
  export type RealtimeTripDataFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    /**
     * Filter, which RealtimeTripData to fetch.
     * 
    **/
    where: RealtimeTripDataWhereUniqueInput
  }

  /**
   * RealtimeTripData findUnique
   */
  export interface RealtimeTripDataFindUniqueArgs extends RealtimeTripDataFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealtimeTripData findUniqueOrThrow
   */
  export type RealtimeTripDataFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    /**
     * Filter, which RealtimeTripData to fetch.
     * 
    **/
    where: RealtimeTripDataWhereUniqueInput
  }


  /**
   * RealtimeTripData base type for findFirst actions
   */
  export type RealtimeTripDataFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    /**
     * Filter, which RealtimeTripData to fetch.
     * 
    **/
    where?: RealtimeTripDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeTripData to fetch.
     * 
    **/
    orderBy?: Enumerable<RealtimeTripDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealtimeTripData.
     * 
    **/
    cursor?: RealtimeTripDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeTripData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeTripData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealtimeTripData.
     * 
    **/
    distinct?: Enumerable<RealtimeTripDataScalarFieldEnum>
  }

  /**
   * RealtimeTripData findFirst
   */
  export interface RealtimeTripDataFindFirstArgs extends RealtimeTripDataFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealtimeTripData findFirstOrThrow
   */
  export type RealtimeTripDataFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    /**
     * Filter, which RealtimeTripData to fetch.
     * 
    **/
    where?: RealtimeTripDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeTripData to fetch.
     * 
    **/
    orderBy?: Enumerable<RealtimeTripDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealtimeTripData.
     * 
    **/
    cursor?: RealtimeTripDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeTripData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeTripData.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealtimeTripData.
     * 
    **/
    distinct?: Enumerable<RealtimeTripDataScalarFieldEnum>
  }


  /**
   * RealtimeTripData findMany
   */
  export type RealtimeTripDataFindManyArgs = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    /**
     * Filter, which RealtimeTripData to fetch.
     * 
    **/
    where?: RealtimeTripDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeTripData to fetch.
     * 
    **/
    orderBy?: Enumerable<RealtimeTripDataOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealtimeTripData.
     * 
    **/
    cursor?: RealtimeTripDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeTripData from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeTripData.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RealtimeTripDataScalarFieldEnum>
  }


  /**
   * RealtimeTripData create
   */
  export type RealtimeTripDataCreateArgs = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    /**
     * The data needed to create a RealtimeTripData.
     * 
    **/
    data: XOR<RealtimeTripDataCreateInput, RealtimeTripDataUncheckedCreateInput>
  }


  /**
   * RealtimeTripData createMany
   */
  export type RealtimeTripDataCreateManyArgs = {
    /**
     * The data used to create many RealtimeTripData.
     * 
    **/
    data: Enumerable<RealtimeTripDataCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RealtimeTripData update
   */
  export type RealtimeTripDataUpdateArgs = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    /**
     * The data needed to update a RealtimeTripData.
     * 
    **/
    data: XOR<RealtimeTripDataUpdateInput, RealtimeTripDataUncheckedUpdateInput>
    /**
     * Choose, which RealtimeTripData to update.
     * 
    **/
    where: RealtimeTripDataWhereUniqueInput
  }


  /**
   * RealtimeTripData updateMany
   */
  export type RealtimeTripDataUpdateManyArgs = {
    /**
     * The data used to update RealtimeTripData.
     * 
    **/
    data: XOR<RealtimeTripDataUpdateManyMutationInput, RealtimeTripDataUncheckedUpdateManyInput>
    /**
     * Filter which RealtimeTripData to update
     * 
    **/
    where?: RealtimeTripDataWhereInput
  }


  /**
   * RealtimeTripData upsert
   */
  export type RealtimeTripDataUpsertArgs = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    /**
     * The filter to search for the RealtimeTripData to update in case it exists.
     * 
    **/
    where: RealtimeTripDataWhereUniqueInput
    /**
     * In case the RealtimeTripData found by the `where` argument doesn't exist, create a new RealtimeTripData with this data.
     * 
    **/
    create: XOR<RealtimeTripDataCreateInput, RealtimeTripDataUncheckedCreateInput>
    /**
     * In case the RealtimeTripData was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RealtimeTripDataUpdateInput, RealtimeTripDataUncheckedUpdateInput>
  }


  /**
   * RealtimeTripData delete
   */
  export type RealtimeTripDataDeleteArgs = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    /**
     * Filter which RealtimeTripData to delete.
     * 
    **/
    where: RealtimeTripDataWhereUniqueInput
  }


  /**
   * RealtimeTripData deleteMany
   */
  export type RealtimeTripDataDeleteManyArgs = {
    /**
     * Filter which RealtimeTripData to delete
     * 
    **/
    where?: RealtimeTripDataWhereInput
  }


  /**
   * RealtimeTripData without action
   */
  export type RealtimeTripDataArgs = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
  }



  /**
   * Model RealtimeCoordinates
   */


  export type AggregateRealtimeCoordinates = {
    _count: RealtimeCoordinatesCountAggregateOutputType | null
    _avg: RealtimeCoordinatesAvgAggregateOutputType | null
    _sum: RealtimeCoordinatesSumAggregateOutputType | null
    _min: RealtimeCoordinatesMinAggregateOutputType | null
    _max: RealtimeCoordinatesMaxAggregateOutputType | null
  }

  export type RealtimeCoordinatesAvgAggregateOutputType = {
    id: number | null
    accuracy: number | null
    altitude: number | null
    altitudeAccuracy: number | null
    heading: number | null
    latitude: number | null
    longitude: number | null
    speed: number | null
  }

  export type RealtimeCoordinatesSumAggregateOutputType = {
    id: number | null
    accuracy: number | null
    altitude: number | null
    altitudeAccuracy: number | null
    heading: number | null
    latitude: number | null
    longitude: number | null
    speed: number | null
  }

  export type RealtimeCoordinatesMinAggregateOutputType = {
    id: number | null
    accuracy: number | null
    altitude: number | null
    altitudeAccuracy: number | null
    heading: number | null
    latitude: number | null
    longitude: number | null
    speed: number | null
  }

  export type RealtimeCoordinatesMaxAggregateOutputType = {
    id: number | null
    accuracy: number | null
    altitude: number | null
    altitudeAccuracy: number | null
    heading: number | null
    latitude: number | null
    longitude: number | null
    speed: number | null
  }

  export type RealtimeCoordinatesCountAggregateOutputType = {
    id: number
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
    _all: number
  }


  export type RealtimeCoordinatesAvgAggregateInputType = {
    id?: true
    accuracy?: true
    altitude?: true
    altitudeAccuracy?: true
    heading?: true
    latitude?: true
    longitude?: true
    speed?: true
  }

  export type RealtimeCoordinatesSumAggregateInputType = {
    id?: true
    accuracy?: true
    altitude?: true
    altitudeAccuracy?: true
    heading?: true
    latitude?: true
    longitude?: true
    speed?: true
  }

  export type RealtimeCoordinatesMinAggregateInputType = {
    id?: true
    accuracy?: true
    altitude?: true
    altitudeAccuracy?: true
    heading?: true
    latitude?: true
    longitude?: true
    speed?: true
  }

  export type RealtimeCoordinatesMaxAggregateInputType = {
    id?: true
    accuracy?: true
    altitude?: true
    altitudeAccuracy?: true
    heading?: true
    latitude?: true
    longitude?: true
    speed?: true
  }

  export type RealtimeCoordinatesCountAggregateInputType = {
    id?: true
    accuracy?: true
    altitude?: true
    altitudeAccuracy?: true
    heading?: true
    latitude?: true
    longitude?: true
    speed?: true
    _all?: true
  }

  export type RealtimeCoordinatesAggregateArgs = {
    /**
     * Filter which RealtimeCoordinates to aggregate.
     * 
    **/
    where?: RealtimeCoordinatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeCoordinates to fetch.
     * 
    **/
    orderBy?: Enumerable<RealtimeCoordinatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: RealtimeCoordinatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeCoordinates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeCoordinates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RealtimeCoordinates
    **/
    _count?: true | RealtimeCoordinatesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RealtimeCoordinatesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RealtimeCoordinatesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RealtimeCoordinatesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RealtimeCoordinatesMaxAggregateInputType
  }

  export type GetRealtimeCoordinatesAggregateType<T extends RealtimeCoordinatesAggregateArgs> = {
        [P in keyof T & keyof AggregateRealtimeCoordinates]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRealtimeCoordinates[P]>
      : GetScalarType<T[P], AggregateRealtimeCoordinates[P]>
  }




  export type RealtimeCoordinatesGroupByArgs = {
    where?: RealtimeCoordinatesWhereInput
    orderBy?: Enumerable<RealtimeCoordinatesOrderByWithAggregationInput>
    by: Array<RealtimeCoordinatesScalarFieldEnum>
    having?: RealtimeCoordinatesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RealtimeCoordinatesCountAggregateInputType | true
    _avg?: RealtimeCoordinatesAvgAggregateInputType
    _sum?: RealtimeCoordinatesSumAggregateInputType
    _min?: RealtimeCoordinatesMinAggregateInputType
    _max?: RealtimeCoordinatesMaxAggregateInputType
  }


  export type RealtimeCoordinatesGroupByOutputType = {
    id: number
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
    _count: RealtimeCoordinatesCountAggregateOutputType | null
    _avg: RealtimeCoordinatesAvgAggregateOutputType | null
    _sum: RealtimeCoordinatesSumAggregateOutputType | null
    _min: RealtimeCoordinatesMinAggregateOutputType | null
    _max: RealtimeCoordinatesMaxAggregateOutputType | null
  }

  type GetRealtimeCoordinatesGroupByPayload<T extends RealtimeCoordinatesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<RealtimeCoordinatesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RealtimeCoordinatesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RealtimeCoordinatesGroupByOutputType[P]>
            : GetScalarType<T[P], RealtimeCoordinatesGroupByOutputType[P]>
        }
      >
    >


  export type RealtimeCoordinatesSelect = {
    id?: boolean
    accuracy?: boolean
    altitude?: boolean
    altitudeAccuracy?: boolean
    heading?: boolean
    latitude?: boolean
    longitude?: boolean
    speed?: boolean
    tripData?: boolean | RealtimeCoordinatesTripDataArgs
    _count?: boolean | RealtimeCoordinatesCountOutputTypeArgs
  }


  export type RealtimeCoordinatesInclude = {
    tripData?: boolean | RealtimeCoordinatesTripDataArgs
    _count?: boolean | RealtimeCoordinatesCountOutputTypeArgs
  } 

  export type RealtimeCoordinatesGetPayload<S extends boolean | null | undefined | RealtimeCoordinatesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RealtimeCoordinates :
    S extends undefined ? never :
    S extends { include: any } & (RealtimeCoordinatesArgs | RealtimeCoordinatesFindManyArgs)
    ? RealtimeCoordinates  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'tripData' ? Array < RealtimeTripDataGetPayload<S['include'][P]>>  :
        P extends '_count' ? RealtimeCoordinatesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RealtimeCoordinatesArgs | RealtimeCoordinatesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tripData' ? Array < RealtimeTripDataGetPayload<S['select'][P]>>  :
        P extends '_count' ? RealtimeCoordinatesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof RealtimeCoordinates ? RealtimeCoordinates[P] : never
  } 
      : RealtimeCoordinates


  type RealtimeCoordinatesCountArgs = Merge<
    Omit<RealtimeCoordinatesFindManyArgs, 'select' | 'include'> & {
      select?: RealtimeCoordinatesCountAggregateInputType | true
    }
  >

  export interface RealtimeCoordinatesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one RealtimeCoordinates that matches the filter.
     * @param {RealtimeCoordinatesFindUniqueArgs} args - Arguments to find a RealtimeCoordinates
     * @example
     * // Get one RealtimeCoordinates
     * const realtimeCoordinates = await prisma.realtimeCoordinates.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RealtimeCoordinatesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RealtimeCoordinatesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RealtimeCoordinates'> extends True ? Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T>> : Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T> | null, null>

    /**
     * Find one RealtimeCoordinates that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RealtimeCoordinatesFindUniqueOrThrowArgs} args - Arguments to find a RealtimeCoordinates
     * @example
     * // Get one RealtimeCoordinates
     * const realtimeCoordinates = await prisma.realtimeCoordinates.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RealtimeCoordinatesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RealtimeCoordinatesFindUniqueOrThrowArgs>
    ): Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T>>

    /**
     * Find the first RealtimeCoordinates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeCoordinatesFindFirstArgs} args - Arguments to find a RealtimeCoordinates
     * @example
     * // Get one RealtimeCoordinates
     * const realtimeCoordinates = await prisma.realtimeCoordinates.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RealtimeCoordinatesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RealtimeCoordinatesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RealtimeCoordinates'> extends True ? Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T>> : Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T> | null, null>

    /**
     * Find the first RealtimeCoordinates that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeCoordinatesFindFirstOrThrowArgs} args - Arguments to find a RealtimeCoordinates
     * @example
     * // Get one RealtimeCoordinates
     * const realtimeCoordinates = await prisma.realtimeCoordinates.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RealtimeCoordinatesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RealtimeCoordinatesFindFirstOrThrowArgs>
    ): Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T>>

    /**
     * Find zero or more RealtimeCoordinates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeCoordinatesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RealtimeCoordinates
     * const realtimeCoordinates = await prisma.realtimeCoordinates.findMany()
     * 
     * // Get first 10 RealtimeCoordinates
     * const realtimeCoordinates = await prisma.realtimeCoordinates.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const realtimeCoordinatesWithIdOnly = await prisma.realtimeCoordinates.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RealtimeCoordinatesFindManyArgs>(
      args?: SelectSubset<T, RealtimeCoordinatesFindManyArgs>
    ): PrismaPromise<Array<RealtimeCoordinatesGetPayload<T>>>

    /**
     * Create a RealtimeCoordinates.
     * @param {RealtimeCoordinatesCreateArgs} args - Arguments to create a RealtimeCoordinates.
     * @example
     * // Create one RealtimeCoordinates
     * const RealtimeCoordinates = await prisma.realtimeCoordinates.create({
     *   data: {
     *     // ... data to create a RealtimeCoordinates
     *   }
     * })
     * 
    **/
    create<T extends RealtimeCoordinatesCreateArgs>(
      args: SelectSubset<T, RealtimeCoordinatesCreateArgs>
    ): Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T>>

    /**
     * Create many RealtimeCoordinates.
     *     @param {RealtimeCoordinatesCreateManyArgs} args - Arguments to create many RealtimeCoordinates.
     *     @example
     *     // Create many RealtimeCoordinates
     *     const realtimeCoordinates = await prisma.realtimeCoordinates.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RealtimeCoordinatesCreateManyArgs>(
      args?: SelectSubset<T, RealtimeCoordinatesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a RealtimeCoordinates.
     * @param {RealtimeCoordinatesDeleteArgs} args - Arguments to delete one RealtimeCoordinates.
     * @example
     * // Delete one RealtimeCoordinates
     * const RealtimeCoordinates = await prisma.realtimeCoordinates.delete({
     *   where: {
     *     // ... filter to delete one RealtimeCoordinates
     *   }
     * })
     * 
    **/
    delete<T extends RealtimeCoordinatesDeleteArgs>(
      args: SelectSubset<T, RealtimeCoordinatesDeleteArgs>
    ): Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T>>

    /**
     * Update one RealtimeCoordinates.
     * @param {RealtimeCoordinatesUpdateArgs} args - Arguments to update one RealtimeCoordinates.
     * @example
     * // Update one RealtimeCoordinates
     * const realtimeCoordinates = await prisma.realtimeCoordinates.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RealtimeCoordinatesUpdateArgs>(
      args: SelectSubset<T, RealtimeCoordinatesUpdateArgs>
    ): Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T>>

    /**
     * Delete zero or more RealtimeCoordinates.
     * @param {RealtimeCoordinatesDeleteManyArgs} args - Arguments to filter RealtimeCoordinates to delete.
     * @example
     * // Delete a few RealtimeCoordinates
     * const { count } = await prisma.realtimeCoordinates.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RealtimeCoordinatesDeleteManyArgs>(
      args?: SelectSubset<T, RealtimeCoordinatesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more RealtimeCoordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeCoordinatesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RealtimeCoordinates
     * const realtimeCoordinates = await prisma.realtimeCoordinates.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RealtimeCoordinatesUpdateManyArgs>(
      args: SelectSubset<T, RealtimeCoordinatesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one RealtimeCoordinates.
     * @param {RealtimeCoordinatesUpsertArgs} args - Arguments to update or create a RealtimeCoordinates.
     * @example
     * // Update or create a RealtimeCoordinates
     * const realtimeCoordinates = await prisma.realtimeCoordinates.upsert({
     *   create: {
     *     // ... data to create a RealtimeCoordinates
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RealtimeCoordinates we want to update
     *   }
     * })
    **/
    upsert<T extends RealtimeCoordinatesUpsertArgs>(
      args: SelectSubset<T, RealtimeCoordinatesUpsertArgs>
    ): Prisma__RealtimeCoordinatesClient<RealtimeCoordinatesGetPayload<T>>

    /**
     * Count the number of RealtimeCoordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeCoordinatesCountArgs} args - Arguments to filter RealtimeCoordinates to count.
     * @example
     * // Count the number of RealtimeCoordinates
     * const count = await prisma.realtimeCoordinates.count({
     *   where: {
     *     // ... the filter for the RealtimeCoordinates we want to count
     *   }
     * })
    **/
    count<T extends RealtimeCoordinatesCountArgs>(
      args?: Subset<T, RealtimeCoordinatesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RealtimeCoordinatesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RealtimeCoordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeCoordinatesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RealtimeCoordinatesAggregateArgs>(args: Subset<T, RealtimeCoordinatesAggregateArgs>): PrismaPromise<GetRealtimeCoordinatesAggregateType<T>>

    /**
     * Group by RealtimeCoordinates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RealtimeCoordinatesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RealtimeCoordinatesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RealtimeCoordinatesGroupByArgs['orderBy'] }
        : { orderBy?: RealtimeCoordinatesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RealtimeCoordinatesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRealtimeCoordinatesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RealtimeCoordinates.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RealtimeCoordinatesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    tripData<T extends RealtimeCoordinatesTripDataArgs= {}>(args?: Subset<T, RealtimeCoordinatesTripDataArgs>): PrismaPromise<Array<RealtimeTripDataGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RealtimeCoordinates base type for findUnique actions
   */
  export type RealtimeCoordinatesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinates
     * 
    **/
    select?: RealtimeCoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeCoordinatesInclude | null
    /**
     * Filter, which RealtimeCoordinates to fetch.
     * 
    **/
    where: RealtimeCoordinatesWhereUniqueInput
  }

  /**
   * RealtimeCoordinates findUnique
   */
  export interface RealtimeCoordinatesFindUniqueArgs extends RealtimeCoordinatesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealtimeCoordinates findUniqueOrThrow
   */
  export type RealtimeCoordinatesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinates
     * 
    **/
    select?: RealtimeCoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeCoordinatesInclude | null
    /**
     * Filter, which RealtimeCoordinates to fetch.
     * 
    **/
    where: RealtimeCoordinatesWhereUniqueInput
  }


  /**
   * RealtimeCoordinates base type for findFirst actions
   */
  export type RealtimeCoordinatesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinates
     * 
    **/
    select?: RealtimeCoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeCoordinatesInclude | null
    /**
     * Filter, which RealtimeCoordinates to fetch.
     * 
    **/
    where?: RealtimeCoordinatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeCoordinates to fetch.
     * 
    **/
    orderBy?: Enumerable<RealtimeCoordinatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealtimeCoordinates.
     * 
    **/
    cursor?: RealtimeCoordinatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeCoordinates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeCoordinates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealtimeCoordinates.
     * 
    **/
    distinct?: Enumerable<RealtimeCoordinatesScalarFieldEnum>
  }

  /**
   * RealtimeCoordinates findFirst
   */
  export interface RealtimeCoordinatesFindFirstArgs extends RealtimeCoordinatesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RealtimeCoordinates findFirstOrThrow
   */
  export type RealtimeCoordinatesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinates
     * 
    **/
    select?: RealtimeCoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeCoordinatesInclude | null
    /**
     * Filter, which RealtimeCoordinates to fetch.
     * 
    **/
    where?: RealtimeCoordinatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeCoordinates to fetch.
     * 
    **/
    orderBy?: Enumerable<RealtimeCoordinatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RealtimeCoordinates.
     * 
    **/
    cursor?: RealtimeCoordinatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeCoordinates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeCoordinates.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RealtimeCoordinates.
     * 
    **/
    distinct?: Enumerable<RealtimeCoordinatesScalarFieldEnum>
  }


  /**
   * RealtimeCoordinates findMany
   */
  export type RealtimeCoordinatesFindManyArgs = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinates
     * 
    **/
    select?: RealtimeCoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeCoordinatesInclude | null
    /**
     * Filter, which RealtimeCoordinates to fetch.
     * 
    **/
    where?: RealtimeCoordinatesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RealtimeCoordinates to fetch.
     * 
    **/
    orderBy?: Enumerable<RealtimeCoordinatesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RealtimeCoordinates.
     * 
    **/
    cursor?: RealtimeCoordinatesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RealtimeCoordinates from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RealtimeCoordinates.
     * 
    **/
    skip?: number
    distinct?: Enumerable<RealtimeCoordinatesScalarFieldEnum>
  }


  /**
   * RealtimeCoordinates create
   */
  export type RealtimeCoordinatesCreateArgs = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinates
     * 
    **/
    select?: RealtimeCoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeCoordinatesInclude | null
    /**
     * The data needed to create a RealtimeCoordinates.
     * 
    **/
    data: XOR<RealtimeCoordinatesCreateInput, RealtimeCoordinatesUncheckedCreateInput>
  }


  /**
   * RealtimeCoordinates createMany
   */
  export type RealtimeCoordinatesCreateManyArgs = {
    /**
     * The data used to create many RealtimeCoordinates.
     * 
    **/
    data: Enumerable<RealtimeCoordinatesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RealtimeCoordinates update
   */
  export type RealtimeCoordinatesUpdateArgs = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinates
     * 
    **/
    select?: RealtimeCoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeCoordinatesInclude | null
    /**
     * The data needed to update a RealtimeCoordinates.
     * 
    **/
    data: XOR<RealtimeCoordinatesUpdateInput, RealtimeCoordinatesUncheckedUpdateInput>
    /**
     * Choose, which RealtimeCoordinates to update.
     * 
    **/
    where: RealtimeCoordinatesWhereUniqueInput
  }


  /**
   * RealtimeCoordinates updateMany
   */
  export type RealtimeCoordinatesUpdateManyArgs = {
    /**
     * The data used to update RealtimeCoordinates.
     * 
    **/
    data: XOR<RealtimeCoordinatesUpdateManyMutationInput, RealtimeCoordinatesUncheckedUpdateManyInput>
    /**
     * Filter which RealtimeCoordinates to update
     * 
    **/
    where?: RealtimeCoordinatesWhereInput
  }


  /**
   * RealtimeCoordinates upsert
   */
  export type RealtimeCoordinatesUpsertArgs = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinates
     * 
    **/
    select?: RealtimeCoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeCoordinatesInclude | null
    /**
     * The filter to search for the RealtimeCoordinates to update in case it exists.
     * 
    **/
    where: RealtimeCoordinatesWhereUniqueInput
    /**
     * In case the RealtimeCoordinates found by the `where` argument doesn't exist, create a new RealtimeCoordinates with this data.
     * 
    **/
    create: XOR<RealtimeCoordinatesCreateInput, RealtimeCoordinatesUncheckedCreateInput>
    /**
     * In case the RealtimeCoordinates was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<RealtimeCoordinatesUpdateInput, RealtimeCoordinatesUncheckedUpdateInput>
  }


  /**
   * RealtimeCoordinates delete
   */
  export type RealtimeCoordinatesDeleteArgs = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinates
     * 
    **/
    select?: RealtimeCoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeCoordinatesInclude | null
    /**
     * Filter which RealtimeCoordinates to delete.
     * 
    **/
    where: RealtimeCoordinatesWhereUniqueInput
  }


  /**
   * RealtimeCoordinates deleteMany
   */
  export type RealtimeCoordinatesDeleteManyArgs = {
    /**
     * Filter which RealtimeCoordinates to delete
     * 
    **/
    where?: RealtimeCoordinatesWhereInput
  }


  /**
   * RealtimeCoordinates.tripData
   */
  export type RealtimeCoordinatesTripDataArgs = {
    /**
     * Select specific fields to fetch from the RealtimeTripData
     * 
    **/
    select?: RealtimeTripDataSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeTripDataInclude | null
    where?: RealtimeTripDataWhereInput
    orderBy?: Enumerable<RealtimeTripDataOrderByWithRelationInput>
    cursor?: RealtimeTripDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RealtimeTripDataScalarFieldEnum>
  }


  /**
   * RealtimeCoordinates without action
   */
  export type RealtimeCoordinatesArgs = {
    /**
     * Select specific fields to fetch from the RealtimeCoordinates
     * 
    **/
    select?: RealtimeCoordinatesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: RealtimeCoordinatesInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AOIScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AOIScalarFieldEnum = (typeof AOIScalarFieldEnum)[keyof typeof AOIScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    ext_expires_in: 'ext_expires_in'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AdressScalarFieldEnum: {
    id: 'id',
    name: 'name',
    coordinatesId: 'coordinatesId'
  };

  export type AdressScalarFieldEnum = (typeof AdressScalarFieldEnum)[keyof typeof AdressScalarFieldEnum]


  export const CoordinatesScalarFieldEnum: {
    id: 'id',
    lat: 'lat',
    lng: 'lng',
    timestamp: 'timestamp'
  };

  export type CoordinatesScalarFieldEnum = (typeof CoordinatesScalarFieldEnum)[keyof typeof CoordinatesScalarFieldEnum]


  export const ExampleScalarFieldEnum: {
    id: 'id'
  };

  export type ExampleScalarFieldEnum = (typeof ExampleScalarFieldEnum)[keyof typeof ExampleScalarFieldEnum]


  export const MilestoneScalarFieldEnum: {
    id: 'id',
    friendlyName: 'friendlyName',
    coordinatesId: 'coordinatesId'
  };

  export type MilestoneScalarFieldEnum = (typeof MilestoneScalarFieldEnum)[keyof typeof MilestoneScalarFieldEnum]


  export const MobileUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    email: 'email',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state',
    lastLogin: 'lastLogin',
    legajoUCA: 'legajoUCA',
    birthDate: 'birthDate',
    sex: 'sex',
    phone: 'phone',
    isDriver: 'isDriver',
    completedSurvey: 'completedSurvey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MobileUserScalarFieldEnum = (typeof MobileUserScalarFieldEnum)[keyof typeof MobileUserScalarFieldEnum]


  export const RealtimeCoordinatesScalarFieldEnum: {
    id: 'id',
    accuracy: 'accuracy',
    altitude: 'altitude',
    altitudeAccuracy: 'altitudeAccuracy',
    heading: 'heading',
    latitude: 'latitude',
    longitude: 'longitude',
    speed: 'speed'
  };

  export type RealtimeCoordinatesScalarFieldEnum = (typeof RealtimeCoordinatesScalarFieldEnum)[keyof typeof RealtimeCoordinatesScalarFieldEnum]


  export const RealtimeTripDataScalarFieldEnum: {
    id: 'id',
    tripId: 'tripId',
    timestamp: 'timestamp',
    seats: 'seats',
    provider: 'provider',
    mocked: 'mocked',
    coordinatesId: 'coordinatesId'
  };

  export type RealtimeTripDataScalarFieldEnum = (typeof RealtimeTripDataScalarFieldEnum)[keyof typeof RealtimeTripDataScalarFieldEnum]


  export const SeatAssignementScalarFieldEnum: {
    id: 'id',
    pickupAdressId: 'pickupAdressId',
    dropoffAdressId: 'dropoffAdressId',
    status: 'status',
    qrCode: 'qrCode',
    userRating: 'userRating',
    message: 'message',
    tripId: 'tripId',
    passengerId: 'passengerId',
    pickupType: 'pickupType',
    dropoffType: 'dropoffType'
  };

  export type SeatAssignementScalarFieldEnum = (typeof SeatAssignementScalarFieldEnum)[keyof typeof SeatAssignementScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TripScalarFieldEnum: {
    id: 'id',
    driverId: 'driverId',
    status: 'status',
    price: 'price',
    rating: 'rating',
    message: 'message',
    startAddressId: 'startAddressId',
    endAddressId: 'endAddressId',
    maxPassengers: 'maxPassengers',
    estimatedStartTime: 'estimatedStartTime',
    estimatedArrivalTime: 'estimatedArrivalTime',
    actualDepartureTime: 'actualDepartureTime',
    actualArrivalTime: 'actualArrivalTime',
    actualDistance: 'actualDistance',
    vehicleId: 'vehicleId',
    description: 'description'
  };

  export type TripScalarFieldEnum = (typeof TripScalarFieldEnum)[keyof typeof TripScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleMakeScalarFieldEnum: {
    id: 'id',
    make: 'make'
  };

  export type VehicleMakeScalarFieldEnum = (typeof VehicleMakeScalarFieldEnum)[keyof typeof VehicleMakeScalarFieldEnum]


  export const VehicleModelScalarFieldEnum: {
    id: 'id',
    model: 'model',
    makeId: 'makeId',
    typeId: 'typeId'
  };

  export type VehicleModelScalarFieldEnum = (typeof VehicleModelScalarFieldEnum)[keyof typeof VehicleModelScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    licensePlate: 'licensePlate',
    driverId: 'driverId',
    maxPassengers: 'maxPassengers',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const VehicleTypeScalarFieldEnum: {
    id: 'id',
    type: 'type'
  };

  export type VehicleTypeScalarFieldEnum = (typeof VehicleTypeScalarFieldEnum)[keyof typeof VehicleTypeScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type ExampleWhereInput = {
    AND?: Enumerable<ExampleWhereInput>
    OR?: Enumerable<ExampleWhereInput>
    NOT?: Enumerable<ExampleWhereInput>
    id?: StringFilter | string
  }

  export type ExampleOrderByWithRelationInput = {
    id?: SortOrder
  }

  export type ExampleWhereUniqueInput = {
    id?: string
  }

  export type ExampleOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ExampleCountOrderByAggregateInput
    _max?: ExampleMaxOrderByAggregateInput
    _min?: ExampleMinOrderByAggregateInput
  }

  export type ExampleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExampleScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExampleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExampleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
  }

  export type MobileUserWhereInput = {
    AND?: Enumerable<MobileUserWhereInput>
    OR?: Enumerable<MobileUserWhereInput>
    NOT?: Enumerable<MobileUserWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    surname?: StringNullableFilter | string | null
    email?: StringFilter | string
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    lastLogin?: DateTimeFilter | Date | string
    legajoUCA?: StringNullableFilter | string | null
    birthDate?: DateTimeNullableFilter | Date | string | null
    sex?: StringNullableFilter | string | null
    phone?: StringNullableFilter | string | null
    isDriver?: BoolFilter | boolean
    completedSurvey?: BoolFilter | boolean
    TripsDriven?: TripListRelationFilter
    createdAt?: DateTimeNullableFilter | Date | string | null
    updatedAt?: DateTimeNullableFilter | Date | string | null
    Vehicle?: VehicleListRelationFilter
    TripsTaken?: SeatAssignementListRelationFilter
  }

  export type MobileUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    lastLogin?: SortOrder
    legajoUCA?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    phone?: SortOrder
    isDriver?: SortOrder
    completedSurvey?: SortOrder
    TripsDriven?: TripOrderByRelationAggregateInput
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Vehicle?: VehicleOrderByRelationAggregateInput
    TripsTaken?: SeatAssignementOrderByRelationAggregateInput
  }

  export type MobileUserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type MobileUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    lastLogin?: SortOrder
    legajoUCA?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    phone?: SortOrder
    isDriver?: SortOrder
    completedSurvey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MobileUserCountOrderByAggregateInput
    _avg?: MobileUserAvgOrderByAggregateInput
    _max?: MobileUserMaxOrderByAggregateInput
    _min?: MobileUserMinOrderByAggregateInput
    _sum?: MobileUserSumOrderByAggregateInput
  }

  export type MobileUserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MobileUserScalarWhereWithAggregatesInput>
    OR?: Enumerable<MobileUserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MobileUserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    surname?: StringNullableWithAggregatesFilter | string | null
    email?: StringWithAggregatesFilter | string
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
    lastLogin?: DateTimeWithAggregatesFilter | Date | string
    legajoUCA?: StringNullableWithAggregatesFilter | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter | Date | string | null
    sex?: StringNullableWithAggregatesFilter | string | null
    phone?: StringNullableWithAggregatesFilter | string | null
    isDriver?: BoolWithAggregatesFilter | boolean
    completedSurvey?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    ext_expires_in?: IntNullableFilter | number | null
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    user?: UserOrderByWithRelationInput
    ext_expires_in?: SortOrder
  }

  export type AccountWhereUniqueInput = {
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    ext_expires_in?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    provider?: StringWithAggregatesFilter | string
    providerAccountId?: StringWithAggregatesFilter | string
    refresh_token?: StringNullableWithAggregatesFilter | string | null
    access_token?: StringNullableWithAggregatesFilter | string | null
    expires_at?: IntNullableWithAggregatesFilter | number | null
    token_type?: StringNullableWithAggregatesFilter | string | null
    scope?: StringNullableWithAggregatesFilter | string | null
    id_token?: StringNullableWithAggregatesFilter | string | null
    session_state?: StringNullableWithAggregatesFilter | string | null
    ext_expires_in?: IntNullableWithAggregatesFilter | number | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sessionToken?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sessionToken?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    emailVerified?: DateTimeNullableFilter | Date | string | null
    image?: StringNullableFilter | string | null
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter | Date | string | null
    image?: StringNullableWithAggregatesFilter | string | null
  }

  export type VehicleWhereInput = {
    AND?: Enumerable<VehicleWhereInput>
    OR?: Enumerable<VehicleWhereInput>
    NOT?: Enumerable<VehicleWhereInput>
    id?: StringFilter | string
    model?: XOR<VehicleModelRelationFilter, VehicleModelWhereInput>
    modelId?: IntFilter | number
    licensePlate?: StringFilter | string
    driver?: XOR<MobileUserRelationFilter, MobileUserWhereInput>
    driverId?: StringFilter | string
    trips?: TripListRelationFilter
    maxPassengers?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    model?: VehicleModelOrderByWithRelationInput
    modelId?: SortOrder
    licensePlate?: SortOrder
    driver?: MobileUserOrderByWithRelationInput
    driverId?: SortOrder
    trips?: TripOrderByRelationAggregateInput
    maxPassengers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VehicleWhereUniqueInput = {
    id?: string
  }

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    licensePlate?: SortOrder
    driverId?: SortOrder
    maxPassengers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VehicleScalarWhereWithAggregatesInput>
    OR?: Enumerable<VehicleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VehicleScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    modelId?: IntWithAggregatesFilter | number
    licensePlate?: StringWithAggregatesFilter | string
    driverId?: StringWithAggregatesFilter | string
    maxPassengers?: IntWithAggregatesFilter | number
    createAt?: DateTimeWithAggregatesFilter | Date | string
    updateAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VehicleMakeWhereInput = {
    AND?: Enumerable<VehicleMakeWhereInput>
    OR?: Enumerable<VehicleMakeWhereInput>
    NOT?: Enumerable<VehicleMakeWhereInput>
    id?: IntFilter | number
    make?: StringFilter | string
    models?: VehicleModelListRelationFilter
  }

  export type VehicleMakeOrderByWithRelationInput = {
    id?: SortOrder
    make?: SortOrder
    models?: VehicleModelOrderByRelationAggregateInput
  }

  export type VehicleMakeWhereUniqueInput = {
    id?: number
    make?: string
  }

  export type VehicleMakeOrderByWithAggregationInput = {
    id?: SortOrder
    make?: SortOrder
    _count?: VehicleMakeCountOrderByAggregateInput
    _avg?: VehicleMakeAvgOrderByAggregateInput
    _max?: VehicleMakeMaxOrderByAggregateInput
    _min?: VehicleMakeMinOrderByAggregateInput
    _sum?: VehicleMakeSumOrderByAggregateInput
  }

  export type VehicleMakeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VehicleMakeScalarWhereWithAggregatesInput>
    OR?: Enumerable<VehicleMakeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VehicleMakeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    make?: StringWithAggregatesFilter | string
  }

  export type VehicleTypeWhereInput = {
    AND?: Enumerable<VehicleTypeWhereInput>
    OR?: Enumerable<VehicleTypeWhereInput>
    NOT?: Enumerable<VehicleTypeWhereInput>
    id?: IntFilter | number
    type?: StringFilter | string
    models?: VehicleModelListRelationFilter
  }

  export type VehicleTypeOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    models?: VehicleModelOrderByRelationAggregateInput
  }

  export type VehicleTypeWhereUniqueInput = {
    id?: number
    type?: string
  }

  export type VehicleTypeOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    _count?: VehicleTypeCountOrderByAggregateInput
    _avg?: VehicleTypeAvgOrderByAggregateInput
    _max?: VehicleTypeMaxOrderByAggregateInput
    _min?: VehicleTypeMinOrderByAggregateInput
    _sum?: VehicleTypeSumOrderByAggregateInput
  }

  export type VehicleTypeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VehicleTypeScalarWhereWithAggregatesInput>
    OR?: Enumerable<VehicleTypeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VehicleTypeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    type?: StringWithAggregatesFilter | string
  }

  export type VehicleModelWhereInput = {
    AND?: Enumerable<VehicleModelWhereInput>
    OR?: Enumerable<VehicleModelWhereInput>
    NOT?: Enumerable<VehicleModelWhereInput>
    id?: IntFilter | number
    model?: StringFilter | string
    make?: XOR<VehicleMakeRelationFilter, VehicleMakeWhereInput>
    makeId?: IntFilter | number
    vehicles?: VehicleListRelationFilter
    type?: XOR<VehicleTypeRelationFilter, VehicleTypeWhereInput>
    typeId?: IntFilter | number
  }

  export type VehicleModelOrderByWithRelationInput = {
    id?: SortOrder
    model?: SortOrder
    make?: VehicleMakeOrderByWithRelationInput
    makeId?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
    type?: VehicleTypeOrderByWithRelationInput
    typeId?: SortOrder
  }

  export type VehicleModelWhereUniqueInput = {
    id?: number
  }

  export type VehicleModelOrderByWithAggregationInput = {
    id?: SortOrder
    model?: SortOrder
    makeId?: SortOrder
    typeId?: SortOrder
    _count?: VehicleModelCountOrderByAggregateInput
    _avg?: VehicleModelAvgOrderByAggregateInput
    _max?: VehicleModelMaxOrderByAggregateInput
    _min?: VehicleModelMinOrderByAggregateInput
    _sum?: VehicleModelSumOrderByAggregateInput
  }

  export type VehicleModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VehicleModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<VehicleModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VehicleModelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    model?: StringWithAggregatesFilter | string
    makeId?: IntWithAggregatesFilter | number
    typeId?: IntWithAggregatesFilter | number
  }

  export type VerificationTokenWhereInput = {
    AND?: Enumerable<VerificationTokenWhereInput>
    OR?: Enumerable<VerificationTokenWhereInput>
    NOT?: Enumerable<VerificationTokenWhereInput>
    identifier?: StringFilter | string
    token?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = {
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
  }

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerificationTokenScalarWhereWithAggregatesInput>
    identifier?: StringWithAggregatesFilter | string
    token?: StringWithAggregatesFilter | string
    expires?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MilestoneWhereInput = {
    AND?: Enumerable<MilestoneWhereInput>
    OR?: Enumerable<MilestoneWhereInput>
    NOT?: Enumerable<MilestoneWhereInput>
    id?: IntFilter | number
    friendlyName?: StringFilter | string
    coordiantes?: XOR<CoordinatesRelationFilter, CoordinatesWhereInput> | null
    coordinatesId?: IntNullableFilter | number | null
  }

  export type MilestoneOrderByWithRelationInput = {
    id?: SortOrder
    friendlyName?: SortOrder
    coordiantes?: CoordinatesOrderByWithRelationInput
    coordinatesId?: SortOrder
  }

  export type MilestoneWhereUniqueInput = {
    id?: number
  }

  export type MilestoneOrderByWithAggregationInput = {
    id?: SortOrder
    friendlyName?: SortOrder
    coordinatesId?: SortOrder
    _count?: MilestoneCountOrderByAggregateInput
    _avg?: MilestoneAvgOrderByAggregateInput
    _max?: MilestoneMaxOrderByAggregateInput
    _min?: MilestoneMinOrderByAggregateInput
    _sum?: MilestoneSumOrderByAggregateInput
  }

  export type MilestoneScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MilestoneScalarWhereWithAggregatesInput>
    OR?: Enumerable<MilestoneScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MilestoneScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    friendlyName?: StringWithAggregatesFilter | string
    coordinatesId?: IntNullableWithAggregatesFilter | number | null
  }

  export type CoordinatesWhereInput = {
    AND?: Enumerable<CoordinatesWhereInput>
    OR?: Enumerable<CoordinatesWhereInput>
    NOT?: Enumerable<CoordinatesWhereInput>
    id?: IntFilter | number
    lat?: FloatFilter | number
    lng?: FloatFilter | number
    timestamp?: DateTimeFilter | Date | string
    milestone?: MilestoneListRelationFilter
    Adress?: AdressListRelationFilter
    AOI?: AOIListRelationFilter
  }

  export type CoordinatesOrderByWithRelationInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    timestamp?: SortOrder
    milestone?: MilestoneOrderByRelationAggregateInput
    Adress?: AdressOrderByRelationAggregateInput
    AOI?: AOIOrderByRelationAggregateInput
  }

  export type CoordinatesWhereUniqueInput = {
    id?: number
  }

  export type CoordinatesOrderByWithAggregationInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    timestamp?: SortOrder
    _count?: CoordinatesCountOrderByAggregateInput
    _avg?: CoordinatesAvgOrderByAggregateInput
    _max?: CoordinatesMaxOrderByAggregateInput
    _min?: CoordinatesMinOrderByAggregateInput
    _sum?: CoordinatesSumOrderByAggregateInput
  }

  export type CoordinatesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CoordinatesScalarWhereWithAggregatesInput>
    OR?: Enumerable<CoordinatesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CoordinatesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    lat?: FloatWithAggregatesFilter | number
    lng?: FloatWithAggregatesFilter | number
    timestamp?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AdressWhereInput = {
    AND?: Enumerable<AdressWhereInput>
    OR?: Enumerable<AdressWhereInput>
    NOT?: Enumerable<AdressWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    coordinates?: XOR<CoordinatesRelationFilter, CoordinatesWhereInput>
    coordinatesId?: IntFilter | number
    PickUps?: SeatAssignementListRelationFilter
    DropOffs?: SeatAssignementListRelationFilter
    Departures?: TripListRelationFilter
    Arrivals?: TripListRelationFilter
  }

  export type AdressOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coordinates?: CoordinatesOrderByWithRelationInput
    coordinatesId?: SortOrder
    PickUps?: SeatAssignementOrderByRelationAggregateInput
    DropOffs?: SeatAssignementOrderByRelationAggregateInput
    Departures?: TripOrderByRelationAggregateInput
    Arrivals?: TripOrderByRelationAggregateInput
  }

  export type AdressWhereUniqueInput = {
    id?: string
    name?: string
  }

  export type AdressOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    coordinatesId?: SortOrder
    _count?: AdressCountOrderByAggregateInput
    _avg?: AdressAvgOrderByAggregateInput
    _max?: AdressMaxOrderByAggregateInput
    _min?: AdressMinOrderByAggregateInput
    _sum?: AdressSumOrderByAggregateInput
  }

  export type AdressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdressScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdressScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    coordinatesId?: IntWithAggregatesFilter | number
  }

  export type SeatAssignementWhereInput = {
    AND?: Enumerable<SeatAssignementWhereInput>
    OR?: Enumerable<SeatAssignementWhereInput>
    NOT?: Enumerable<SeatAssignementWhereInput>
    id?: StringFilter | string
    pickupAddress?: XOR<AdressRelationFilter, AdressWhereInput>
    pickupAdressId?: StringFilter | string
    dropoffAddress?: XOR<AdressRelationFilter, AdressWhereInput>
    dropoffAdressId?: StringFilter | string
    status?: StringFilter | string
    qrCode?: StringFilter | string
    userRating?: IntNullableFilter | number | null
    message?: StringNullableFilter | string | null
    trip?: XOR<TripRelationFilter, TripWhereInput>
    tripId?: StringFilter | string
    passenger?: XOR<MobileUserRelationFilter, MobileUserWhereInput>
    passengerId?: StringFilter | string
    pickupType?: StringNullableFilter | string | null
    dropoffType?: StringNullableFilter | string | null
  }

  export type SeatAssignementOrderByWithRelationInput = {
    id?: SortOrder
    pickupAddress?: AdressOrderByWithRelationInput
    pickupAdressId?: SortOrder
    dropoffAddress?: AdressOrderByWithRelationInput
    dropoffAdressId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    userRating?: SortOrder
    message?: SortOrder
    trip?: TripOrderByWithRelationInput
    tripId?: SortOrder
    passenger?: MobileUserOrderByWithRelationInput
    passengerId?: SortOrder
    pickupType?: SortOrder
    dropoffType?: SortOrder
  }

  export type SeatAssignementWhereUniqueInput = {
    id?: string
  }

  export type SeatAssignementOrderByWithAggregationInput = {
    id?: SortOrder
    pickupAdressId?: SortOrder
    dropoffAdressId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    userRating?: SortOrder
    message?: SortOrder
    tripId?: SortOrder
    passengerId?: SortOrder
    pickupType?: SortOrder
    dropoffType?: SortOrder
    _count?: SeatAssignementCountOrderByAggregateInput
    _avg?: SeatAssignementAvgOrderByAggregateInput
    _max?: SeatAssignementMaxOrderByAggregateInput
    _min?: SeatAssignementMinOrderByAggregateInput
    _sum?: SeatAssignementSumOrderByAggregateInput
  }

  export type SeatAssignementScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SeatAssignementScalarWhereWithAggregatesInput>
    OR?: Enumerable<SeatAssignementScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SeatAssignementScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    pickupAdressId?: StringWithAggregatesFilter | string
    dropoffAdressId?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    qrCode?: StringWithAggregatesFilter | string
    userRating?: IntNullableWithAggregatesFilter | number | null
    message?: StringNullableWithAggregatesFilter | string | null
    tripId?: StringWithAggregatesFilter | string
    passengerId?: StringWithAggregatesFilter | string
    pickupType?: StringNullableWithAggregatesFilter | string | null
    dropoffType?: StringNullableWithAggregatesFilter | string | null
  }

  export type TripWhereInput = {
    AND?: Enumerable<TripWhereInput>
    OR?: Enumerable<TripWhereInput>
    NOT?: Enumerable<TripWhereInput>
    id?: StringFilter | string
    driver?: XOR<MobileUserRelationFilter, MobileUserWhereInput>
    driverId?: StringFilter | string
    seatAssignments?: SeatAssignementListRelationFilter
    status?: StringFilter | string
    price?: FloatFilter | number
    rating?: IntNullableFilter | number | null
    message?: StringNullableFilter | string | null
    startAddress?: XOR<AdressRelationFilter, AdressWhereInput>
    startAddressId?: StringFilter | string
    endAddress?: XOR<AdressRelationFilter, AdressWhereInput>
    endAddressId?: StringFilter | string
    maxPassengers?: IntFilter | number
    estimatedStartTime?: DateTimeFilter | Date | string
    estimatedArrivalTime?: DateTimeFilter | Date | string
    actualDepartureTime?: DateTimeNullableFilter | Date | string | null
    actualArrivalTime?: DateTimeNullableFilter | Date | string | null
    actualDistance?: FloatNullableFilter | number | null
    Vehicle?: XOR<VehicleRelationFilter, VehicleWhereInput>
    vehicleId?: StringFilter | string
    description?: StringNullableFilter | string | null
    realtimeTripData?: RealtimeTripDataListRelationFilter
  }

  export type TripOrderByWithRelationInput = {
    id?: SortOrder
    driver?: MobileUserOrderByWithRelationInput
    driverId?: SortOrder
    seatAssignments?: SeatAssignementOrderByRelationAggregateInput
    status?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    startAddress?: AdressOrderByWithRelationInput
    startAddressId?: SortOrder
    endAddress?: AdressOrderByWithRelationInput
    endAddressId?: SortOrder
    maxPassengers?: SortOrder
    estimatedStartTime?: SortOrder
    estimatedArrivalTime?: SortOrder
    actualDepartureTime?: SortOrder
    actualArrivalTime?: SortOrder
    actualDistance?: SortOrder
    Vehicle?: VehicleOrderByWithRelationInput
    vehicleId?: SortOrder
    description?: SortOrder
    realtimeTripData?: RealtimeTripDataOrderByRelationAggregateInput
  }

  export type TripWhereUniqueInput = {
    id?: string
  }

  export type TripOrderByWithAggregationInput = {
    id?: SortOrder
    driverId?: SortOrder
    status?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    startAddressId?: SortOrder
    endAddressId?: SortOrder
    maxPassengers?: SortOrder
    estimatedStartTime?: SortOrder
    estimatedArrivalTime?: SortOrder
    actualDepartureTime?: SortOrder
    actualArrivalTime?: SortOrder
    actualDistance?: SortOrder
    vehicleId?: SortOrder
    description?: SortOrder
    _count?: TripCountOrderByAggregateInput
    _avg?: TripAvgOrderByAggregateInput
    _max?: TripMaxOrderByAggregateInput
    _min?: TripMinOrderByAggregateInput
    _sum?: TripSumOrderByAggregateInput
  }

  export type TripScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TripScalarWhereWithAggregatesInput>
    OR?: Enumerable<TripScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TripScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    driverId?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    price?: FloatWithAggregatesFilter | number
    rating?: IntNullableWithAggregatesFilter | number | null
    message?: StringNullableWithAggregatesFilter | string | null
    startAddressId?: StringWithAggregatesFilter | string
    endAddressId?: StringWithAggregatesFilter | string
    maxPassengers?: IntWithAggregatesFilter | number
    estimatedStartTime?: DateTimeWithAggregatesFilter | Date | string
    estimatedArrivalTime?: DateTimeWithAggregatesFilter | Date | string
    actualDepartureTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
    actualArrivalTime?: DateTimeNullableWithAggregatesFilter | Date | string | null
    actualDistance?: FloatNullableWithAggregatesFilter | number | null
    vehicleId?: StringWithAggregatesFilter | string
    description?: StringNullableWithAggregatesFilter | string | null
  }

  export type AOIWhereInput = {
    AND?: Enumerable<AOIWhereInput>
    OR?: Enumerable<AOIWhereInput>
    NOT?: Enumerable<AOIWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    coordinates?: CoordinatesListRelationFilter
  }

  export type AOIOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    coordinates?: CoordinatesOrderByRelationAggregateInput
  }

  export type AOIWhereUniqueInput = {
    id?: string
  }

  export type AOIOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AOICountOrderByAggregateInput
    _max?: AOIMaxOrderByAggregateInput
    _min?: AOIMinOrderByAggregateInput
  }

  export type AOIScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AOIScalarWhereWithAggregatesInput>
    OR?: Enumerable<AOIScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AOIScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type RealtimeTripDataWhereInput = {
    AND?: Enumerable<RealtimeTripDataWhereInput>
    OR?: Enumerable<RealtimeTripDataWhereInput>
    NOT?: Enumerable<RealtimeTripDataWhereInput>
    id?: StringFilter | string
    trip?: XOR<TripRelationFilter, TripWhereInput>
    tripId?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    seats?: IntFilter | number
    provider?: StringFilter | string
    mocked?: BoolFilter | boolean
    coordinates?: XOR<RealtimeCoordinatesRelationFilter, RealtimeCoordinatesWhereInput>
    coordinatesId?: IntFilter | number
  }

  export type RealtimeTripDataOrderByWithRelationInput = {
    id?: SortOrder
    trip?: TripOrderByWithRelationInput
    tripId?: SortOrder
    timestamp?: SortOrder
    seats?: SortOrder
    provider?: SortOrder
    mocked?: SortOrder
    coordinates?: RealtimeCoordinatesOrderByWithRelationInput
    coordinatesId?: SortOrder
  }

  export type RealtimeTripDataWhereUniqueInput = {
    id?: string
  }

  export type RealtimeTripDataOrderByWithAggregationInput = {
    id?: SortOrder
    tripId?: SortOrder
    timestamp?: SortOrder
    seats?: SortOrder
    provider?: SortOrder
    mocked?: SortOrder
    coordinatesId?: SortOrder
    _count?: RealtimeTripDataCountOrderByAggregateInput
    _avg?: RealtimeTripDataAvgOrderByAggregateInput
    _max?: RealtimeTripDataMaxOrderByAggregateInput
    _min?: RealtimeTripDataMinOrderByAggregateInput
    _sum?: RealtimeTripDataSumOrderByAggregateInput
  }

  export type RealtimeTripDataScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RealtimeTripDataScalarWhereWithAggregatesInput>
    OR?: Enumerable<RealtimeTripDataScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RealtimeTripDataScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    tripId?: StringWithAggregatesFilter | string
    timestamp?: DateTimeWithAggregatesFilter | Date | string
    seats?: IntWithAggregatesFilter | number
    provider?: StringWithAggregatesFilter | string
    mocked?: BoolWithAggregatesFilter | boolean
    coordinatesId?: IntWithAggregatesFilter | number
  }

  export type RealtimeCoordinatesWhereInput = {
    AND?: Enumerable<RealtimeCoordinatesWhereInput>
    OR?: Enumerable<RealtimeCoordinatesWhereInput>
    NOT?: Enumerable<RealtimeCoordinatesWhereInput>
    id?: IntFilter | number
    accuracy?: FloatFilter | number
    altitude?: FloatFilter | number
    altitudeAccuracy?: FloatFilter | number
    heading?: FloatFilter | number
    latitude?: FloatFilter | number
    longitude?: FloatFilter | number
    speed?: FloatFilter | number
    tripData?: RealtimeTripDataListRelationFilter
  }

  export type RealtimeCoordinatesOrderByWithRelationInput = {
    id?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    altitudeAccuracy?: SortOrder
    heading?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
    tripData?: RealtimeTripDataOrderByRelationAggregateInput
  }

  export type RealtimeCoordinatesWhereUniqueInput = {
    id?: number
  }

  export type RealtimeCoordinatesOrderByWithAggregationInput = {
    id?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    altitudeAccuracy?: SortOrder
    heading?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
    _count?: RealtimeCoordinatesCountOrderByAggregateInput
    _avg?: RealtimeCoordinatesAvgOrderByAggregateInput
    _max?: RealtimeCoordinatesMaxOrderByAggregateInput
    _min?: RealtimeCoordinatesMinOrderByAggregateInput
    _sum?: RealtimeCoordinatesSumOrderByAggregateInput
  }

  export type RealtimeCoordinatesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RealtimeCoordinatesScalarWhereWithAggregatesInput>
    OR?: Enumerable<RealtimeCoordinatesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RealtimeCoordinatesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    accuracy?: FloatWithAggregatesFilter | number
    altitude?: FloatWithAggregatesFilter | number
    altitudeAccuracy?: FloatWithAggregatesFilter | number
    heading?: FloatWithAggregatesFilter | number
    latitude?: FloatWithAggregatesFilter | number
    longitude?: FloatWithAggregatesFilter | number
    speed?: FloatWithAggregatesFilter | number
  }

  export type ExampleCreateInput = {
    id?: string
  }

  export type ExampleUncheckedCreateInput = {
    id?: string
  }

  export type ExampleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ExampleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ExampleCreateManyInput = {
    id?: string
  }

  export type ExampleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ExampleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type MobileUserCreateInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    lastLogin?: Date | string
    legajoUCA?: string | null
    birthDate?: Date | string | null
    sex?: string | null
    phone?: string | null
    isDriver?: boolean
    completedSurvey?: boolean
    TripsDriven?: TripCreateNestedManyWithoutDriverInput
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Vehicle?: VehicleCreateNestedManyWithoutDriverInput
    TripsTaken?: SeatAssignementCreateNestedManyWithoutPassengerInput
  }

  export type MobileUserUncheckedCreateInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    lastLogin?: Date | string
    legajoUCA?: string | null
    birthDate?: Date | string | null
    sex?: string | null
    phone?: string | null
    isDriver?: boolean
    completedSurvey?: boolean
    TripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Vehicle?: VehicleUncheckedCreateNestedManyWithoutDriverInput
    TripsTaken?: SeatAssignementUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type MobileUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoUCA?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDriver?: BoolFieldUpdateOperationsInput | boolean
    completedSurvey?: BoolFieldUpdateOperationsInput | boolean
    TripsDriven?: TripUpdateManyWithoutDriverNestedInput
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Vehicle?: VehicleUpdateManyWithoutDriverNestedInput
    TripsTaken?: SeatAssignementUpdateManyWithoutPassengerNestedInput
  }

  export type MobileUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoUCA?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDriver?: BoolFieldUpdateOperationsInput | boolean
    completedSurvey?: BoolFieldUpdateOperationsInput | boolean
    TripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Vehicle?: VehicleUncheckedUpdateManyWithoutDriverNestedInput
    TripsTaken?: SeatAssignementUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type MobileUserCreateManyInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    lastLogin?: Date | string
    legajoUCA?: string | null
    birthDate?: Date | string | null
    sex?: string | null
    phone?: string | null
    isDriver?: boolean
    completedSurvey?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
  }

  export type MobileUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoUCA?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDriver?: BoolFieldUpdateOperationsInput | boolean
    completedSurvey?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MobileUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoUCA?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDriver?: BoolFieldUpdateOperationsInput | boolean
    completedSurvey?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
    ext_expires_in?: number | null
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleCreateInput = {
    id?: string
    model: VehicleModelCreateNestedOneWithoutVehiclesInput
    licensePlate: string
    driver: MobileUserCreateNestedOneWithoutVehicleInput
    trips?: TripCreateNestedManyWithoutVehicleInput
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    modelId: number
    licensePlate: string
    driverId: string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput
    licensePlate?: StringFieldUpdateOperationsInput | string
    driver?: MobileUserUpdateOneRequiredWithoutVehicleNestedInput
    trips?: TripUpdateManyWithoutVehicleNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateManyInput = {
    id?: string
    modelId: number
    licensePlate: string
    driverId: string
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleMakeCreateInput = {
    make: string
    models?: VehicleModelCreateNestedManyWithoutMakeInput
  }

  export type VehicleMakeUncheckedCreateInput = {
    id?: number
    make: string
    models?: VehicleModelUncheckedCreateNestedManyWithoutMakeInput
  }

  export type VehicleMakeUpdateInput = {
    make?: StringFieldUpdateOperationsInput | string
    models?: VehicleModelUpdateManyWithoutMakeNestedInput
  }

  export type VehicleMakeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
    models?: VehicleModelUncheckedUpdateManyWithoutMakeNestedInput
  }

  export type VehicleMakeCreateManyInput = {
    id?: number
    make: string
  }

  export type VehicleMakeUpdateManyMutationInput = {
    make?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleMakeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleTypeCreateInput = {
    type: string
    models?: VehicleModelCreateNestedManyWithoutTypeInput
  }

  export type VehicleTypeUncheckedCreateInput = {
    id?: number
    type: string
    models?: VehicleModelUncheckedCreateNestedManyWithoutTypeInput
  }

  export type VehicleTypeUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    models?: VehicleModelUpdateManyWithoutTypeNestedInput
  }

  export type VehicleTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    models?: VehicleModelUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type VehicleTypeCreateManyInput = {
    id?: number
    type: string
  }

  export type VehicleTypeUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleModelCreateInput = {
    model: string
    make: VehicleMakeCreateNestedOneWithoutModelsInput
    vehicles?: VehicleCreateNestedManyWithoutModelInput
    type: VehicleTypeCreateNestedOneWithoutModelsInput
  }

  export type VehicleModelUncheckedCreateInput = {
    id?: number
    model: string
    makeId: number
    vehicles?: VehicleUncheckedCreateNestedManyWithoutModelInput
    typeId: number
  }

  export type VehicleModelUpdateInput = {
    model?: StringFieldUpdateOperationsInput | string
    make?: VehicleMakeUpdateOneRequiredWithoutModelsNestedInput
    vehicles?: VehicleUpdateManyWithoutModelNestedInput
    type?: VehicleTypeUpdateOneRequiredWithoutModelsNestedInput
  }

  export type VehicleModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    makeId?: IntFieldUpdateOperationsInput | number
    vehicles?: VehicleUncheckedUpdateManyWithoutModelNestedInput
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleModelCreateManyInput = {
    id?: number
    model: string
    makeId: number
    typeId: number
  }

  export type VehicleModelUpdateManyMutationInput = {
    model?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    makeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateInput = {
    friendlyName: string
    coordiantes?: CoordinatesCreateNestedOneWithoutMilestoneInput
  }

  export type MilestoneUncheckedCreateInput = {
    id?: number
    friendlyName: string
    coordinatesId?: number | null
  }

  export type MilestoneUpdateInput = {
    friendlyName?: StringFieldUpdateOperationsInput | string
    coordiantes?: CoordinatesUpdateOneWithoutMilestoneNestedInput
  }

  export type MilestoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendlyName?: StringFieldUpdateOperationsInput | string
    coordinatesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MilestoneCreateManyInput = {
    id?: number
    friendlyName: string
    coordinatesId?: number | null
  }

  export type MilestoneUpdateManyMutationInput = {
    friendlyName?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendlyName?: StringFieldUpdateOperationsInput | string
    coordinatesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CoordinatesCreateInput = {
    lat: number
    lng: number
    timestamp: Date | string
    milestone?: MilestoneCreateNestedManyWithoutCoordiantesInput
    Adress?: AdressCreateNestedManyWithoutCoordinatesInput
    AOI?: AOICreateNestedManyWithoutCoordinatesInput
  }

  export type CoordinatesUncheckedCreateInput = {
    id?: number
    lat: number
    lng: number
    timestamp: Date | string
    milestone?: MilestoneUncheckedCreateNestedManyWithoutCoordiantesInput
    Adress?: AdressUncheckedCreateNestedManyWithoutCoordinatesInput
    AOI?: AOIUncheckedCreateNestedManyWithoutCoordinatesInput
  }

  export type CoordinatesUpdateInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUpdateManyWithoutCoordiantesNestedInput
    Adress?: AdressUpdateManyWithoutCoordinatesNestedInput
    AOI?: AOIUpdateManyWithoutCoordinatesNestedInput
  }

  export type CoordinatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUncheckedUpdateManyWithoutCoordiantesNestedInput
    Adress?: AdressUncheckedUpdateManyWithoutCoordinatesNestedInput
    AOI?: AOIUncheckedUpdateManyWithoutCoordinatesNestedInput
  }

  export type CoordinatesCreateManyInput = {
    id?: number
    lat: number
    lng: number
    timestamp: Date | string
  }

  export type CoordinatesUpdateManyMutationInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoordinatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdressCreateInput = {
    id?: string
    name: string
    coordinates: CoordinatesCreateNestedOneWithoutAdressInput
    PickUps?: SeatAssignementCreateNestedManyWithoutPickupAddressInput
    DropOffs?: SeatAssignementCreateNestedManyWithoutDropoffAddressInput
    Departures?: TripCreateNestedManyWithoutStartAddressInput
    Arrivals?: TripCreateNestedManyWithoutEndAddressInput
  }

  export type AdressUncheckedCreateInput = {
    id?: string
    name: string
    coordinatesId: number
    PickUps?: SeatAssignementUncheckedCreateNestedManyWithoutPickupAddressInput
    DropOffs?: SeatAssignementUncheckedCreateNestedManyWithoutDropoffAddressInput
    Departures?: TripUncheckedCreateNestedManyWithoutStartAddressInput
    Arrivals?: TripUncheckedCreateNestedManyWithoutEndAddressInput
  }

  export type AdressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: CoordinatesUpdateOneRequiredWithoutAdressNestedInput
    PickUps?: SeatAssignementUpdateManyWithoutPickupAddressNestedInput
    DropOffs?: SeatAssignementUpdateManyWithoutDropoffAddressNestedInput
    Departures?: TripUpdateManyWithoutStartAddressNestedInput
    Arrivals?: TripUpdateManyWithoutEndAddressNestedInput
  }

  export type AdressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinatesId?: IntFieldUpdateOperationsInput | number
    PickUps?: SeatAssignementUncheckedUpdateManyWithoutPickupAddressNestedInput
    DropOffs?: SeatAssignementUncheckedUpdateManyWithoutDropoffAddressNestedInput
    Departures?: TripUncheckedUpdateManyWithoutStartAddressNestedInput
    Arrivals?: TripUncheckedUpdateManyWithoutEndAddressNestedInput
  }

  export type AdressCreateManyInput = {
    id?: string
    name: string
    coordinatesId: number
  }

  export type AdressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AdressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinatesId?: IntFieldUpdateOperationsInput | number
  }

  export type SeatAssignementCreateInput = {
    id?: string
    pickupAddress: AdressCreateNestedOneWithoutPickUpsInput
    dropoffAddress: AdressCreateNestedOneWithoutDropOffsInput
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    trip: TripCreateNestedOneWithoutSeatAssignmentsInput
    passenger: MobileUserCreateNestedOneWithoutTripsTakenInput
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementUncheckedCreateInput = {
    id?: string
    pickupAdressId: string
    dropoffAdressId: string
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    tripId: string
    passengerId: string
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAddress?: AdressUpdateOneRequiredWithoutPickUpsNestedInput
    dropoffAddress?: AdressUpdateOneRequiredWithoutDropOffsNestedInput
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    trip?: TripUpdateOneRequiredWithoutSeatAssignmentsNestedInput
    passenger?: MobileUserUpdateOneRequiredWithoutTripsTakenNestedInput
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAdressId?: StringFieldUpdateOperationsInput | string
    dropoffAdressId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementCreateManyInput = {
    id?: string
    pickupAdressId: string
    dropoffAdressId: string
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    tripId: string
    passengerId: string
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAdressId?: StringFieldUpdateOperationsInput | string
    dropoffAdressId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripCreateInput = {
    id?: string
    driver: MobileUserCreateNestedOneWithoutTripsDrivenInput
    seatAssignments?: SeatAssignementCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddress: AdressCreateNestedOneWithoutDeparturesInput
    endAddress: AdressCreateNestedOneWithoutArrivalsInput
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    Vehicle: VehicleCreateNestedOneWithoutTripsInput
    description?: string | null
    realtimeTripData?: RealtimeTripDataCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateInput = {
    id?: string
    driverId: string
    seatAssignments?: SeatAssignementUncheckedCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddressId: string
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    vehicleId: string
    description?: string | null
    realtimeTripData?: RealtimeTripDataUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver?: MobileUserUpdateOneRequiredWithoutTripsDrivenNestedInput
    seatAssignments?: SeatAssignementUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddress?: AdressUpdateOneRequiredWithoutDeparturesNestedInput
    endAddress?: AdressUpdateOneRequiredWithoutArrivalsNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    Vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    seatAssignments?: SeatAssignementUncheckedUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddressId?: StringFieldUpdateOperationsInput | string
    endAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripCreateManyInput = {
    id?: string
    driverId: string
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddressId: string
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    vehicleId: string
    description?: string | null
  }

  export type TripUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddressId?: StringFieldUpdateOperationsInput | string
    endAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AOICreateInput = {
    id?: string
    name: string
    coordinates?: CoordinatesCreateNestedManyWithoutAOIInput
  }

  export type AOIUncheckedCreateInput = {
    id?: string
    name: string
    coordinates?: CoordinatesUncheckedCreateNestedManyWithoutAOIInput
  }

  export type AOIUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: CoordinatesUpdateManyWithoutAOINestedInput
  }

  export type AOIUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: CoordinatesUncheckedUpdateManyWithoutAOINestedInput
  }

  export type AOICreateManyInput = {
    id?: string
    name: string
  }

  export type AOIUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AOIUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RealtimeTripDataCreateInput = {
    id?: string
    trip: TripCreateNestedOneWithoutRealtimeTripDataInput
    timestamp: Date | string
    seats: number
    provider: string
    mocked: boolean
    coordinates: RealtimeCoordinatesCreateNestedOneWithoutTripDataInput
  }

  export type RealtimeTripDataUncheckedCreateInput = {
    id?: string
    tripId: string
    timestamp: Date | string
    seats: number
    provider: string
    mocked: boolean
    coordinatesId: number
  }

  export type RealtimeTripDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneRequiredWithoutRealtimeTripDataNestedInput
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    mocked?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: RealtimeCoordinatesUpdateOneRequiredWithoutTripDataNestedInput
  }

  export type RealtimeTripDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    mocked?: BoolFieldUpdateOperationsInput | boolean
    coordinatesId?: IntFieldUpdateOperationsInput | number
  }

  export type RealtimeTripDataCreateManyInput = {
    id?: string
    tripId: string
    timestamp: Date | string
    seats: number
    provider: string
    mocked: boolean
    coordinatesId: number
  }

  export type RealtimeTripDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    mocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RealtimeTripDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    mocked?: BoolFieldUpdateOperationsInput | boolean
    coordinatesId?: IntFieldUpdateOperationsInput | number
  }

  export type RealtimeCoordinatesCreateInput = {
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
    tripData?: RealtimeTripDataCreateNestedManyWithoutCoordinatesInput
  }

  export type RealtimeCoordinatesUncheckedCreateInput = {
    id?: number
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
    tripData?: RealtimeTripDataUncheckedCreateNestedManyWithoutCoordinatesInput
  }

  export type RealtimeCoordinatesUpdateInput = {
    accuracy?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    altitudeAccuracy?: FloatFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    tripData?: RealtimeTripDataUpdateManyWithoutCoordinatesNestedInput
  }

  export type RealtimeCoordinatesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    altitudeAccuracy?: FloatFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
    tripData?: RealtimeTripDataUncheckedUpdateManyWithoutCoordinatesNestedInput
  }

  export type RealtimeCoordinatesCreateManyInput = {
    id?: number
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
  }

  export type RealtimeCoordinatesUpdateManyMutationInput = {
    accuracy?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    altitudeAccuracy?: FloatFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
  }

  export type RealtimeCoordinatesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    altitudeAccuracy?: FloatFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type ExampleCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExampleMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ExampleMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type TripListRelationFilter = {
    every?: TripWhereInput
    some?: TripWhereInput
    none?: TripWhereInput
  }

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type SeatAssignementListRelationFilter = {
    every?: SeatAssignementWhereInput
    some?: SeatAssignementWhereInput
    none?: SeatAssignementWhereInput
  }

  export type TripOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeatAssignementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MobileUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    lastLogin?: SortOrder
    legajoUCA?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    phone?: SortOrder
    isDriver?: SortOrder
    completedSurvey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MobileUserAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type MobileUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    lastLogin?: SortOrder
    legajoUCA?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    phone?: SortOrder
    isDriver?: SortOrder
    completedSurvey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MobileUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    email?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    lastLogin?: SortOrder
    legajoUCA?: SortOrder
    birthDate?: SortOrder
    sex?: SortOrder
    phone?: SortOrder
    isDriver?: SortOrder
    completedSurvey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MobileUserSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    ext_expires_in?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    ext_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    ext_expires_in?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
    ext_expires_in?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    ext_expires_in?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type VehicleModelRelationFilter = {
    is?: VehicleModelWhereInput
    isNot?: VehicleModelWhereInput
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type MobileUserRelationFilter = {
    is?: MobileUserWhereInput
    isNot?: MobileUserWhereInput
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    licensePlate?: SortOrder
    driverId?: SortOrder
    maxPassengers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    modelId?: SortOrder
    maxPassengers?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    licensePlate?: SortOrder
    driverId?: SortOrder
    maxPassengers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    licensePlate?: SortOrder
    driverId?: SortOrder
    maxPassengers?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    modelId?: SortOrder
    maxPassengers?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type VehicleModelListRelationFilter = {
    every?: VehicleModelWhereInput
    some?: VehicleModelWhereInput
    none?: VehicleModelWhereInput
  }

  export type VehicleModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleMakeCountOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
  }

  export type VehicleMakeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehicleMakeMaxOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
  }

  export type VehicleMakeMinOrderByAggregateInput = {
    id?: SortOrder
    make?: SortOrder
  }

  export type VehicleMakeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehicleTypeCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type VehicleTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehicleTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type VehicleTypeMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
  }

  export type VehicleTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehicleMakeRelationFilter = {
    is?: VehicleMakeWhereInput
    isNot?: VehicleMakeWhereInput
  }

  export type VehicleTypeRelationFilter = {
    is?: VehicleTypeWhereInput
    isNot?: VehicleTypeWhereInput
  }

  export type VehicleModelCountOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    makeId?: SortOrder
    typeId?: SortOrder
  }

  export type VehicleModelAvgOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    typeId?: SortOrder
  }

  export type VehicleModelMaxOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    makeId?: SortOrder
    typeId?: SortOrder
  }

  export type VehicleModelMinOrderByAggregateInput = {
    id?: SortOrder
    model?: SortOrder
    makeId?: SortOrder
    typeId?: SortOrder
  }

  export type VehicleModelSumOrderByAggregateInput = {
    id?: SortOrder
    makeId?: SortOrder
    typeId?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type CoordinatesRelationFilter = {
    is?: CoordinatesWhereInput | null
    isNot?: CoordinatesWhereInput | null
  }

  export type MilestoneCountOrderByAggregateInput = {
    id?: SortOrder
    friendlyName?: SortOrder
    coordinatesId?: SortOrder
  }

  export type MilestoneAvgOrderByAggregateInput = {
    id?: SortOrder
    coordinatesId?: SortOrder
  }

  export type MilestoneMaxOrderByAggregateInput = {
    id?: SortOrder
    friendlyName?: SortOrder
    coordinatesId?: SortOrder
  }

  export type MilestoneMinOrderByAggregateInput = {
    id?: SortOrder
    friendlyName?: SortOrder
    coordinatesId?: SortOrder
  }

  export type MilestoneSumOrderByAggregateInput = {
    id?: SortOrder
    coordinatesId?: SortOrder
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type MilestoneListRelationFilter = {
    every?: MilestoneWhereInput
    some?: MilestoneWhereInput
    none?: MilestoneWhereInput
  }

  export type AdressListRelationFilter = {
    every?: AdressWhereInput
    some?: AdressWhereInput
    none?: AdressWhereInput
  }

  export type AOIListRelationFilter = {
    every?: AOIWhereInput
    some?: AOIWhereInput
    none?: AOIWhereInput
  }

  export type MilestoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AOIOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CoordinatesCountOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    timestamp?: SortOrder
  }

  export type CoordinatesAvgOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type CoordinatesMaxOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    timestamp?: SortOrder
  }

  export type CoordinatesMinOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    timestamp?: SortOrder
  }

  export type CoordinatesSumOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type AdressCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coordinatesId?: SortOrder
  }

  export type AdressAvgOrderByAggregateInput = {
    coordinatesId?: SortOrder
  }

  export type AdressMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coordinatesId?: SortOrder
  }

  export type AdressMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    coordinatesId?: SortOrder
  }

  export type AdressSumOrderByAggregateInput = {
    coordinatesId?: SortOrder
  }

  export type AdressRelationFilter = {
    is?: AdressWhereInput
    isNot?: AdressWhereInput
  }

  export type TripRelationFilter = {
    is?: TripWhereInput
    isNot?: TripWhereInput
  }

  export type SeatAssignementCountOrderByAggregateInput = {
    id?: SortOrder
    pickupAdressId?: SortOrder
    dropoffAdressId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    userRating?: SortOrder
    message?: SortOrder
    tripId?: SortOrder
    passengerId?: SortOrder
    pickupType?: SortOrder
    dropoffType?: SortOrder
  }

  export type SeatAssignementAvgOrderByAggregateInput = {
    userRating?: SortOrder
  }

  export type SeatAssignementMaxOrderByAggregateInput = {
    id?: SortOrder
    pickupAdressId?: SortOrder
    dropoffAdressId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    userRating?: SortOrder
    message?: SortOrder
    tripId?: SortOrder
    passengerId?: SortOrder
    pickupType?: SortOrder
    dropoffType?: SortOrder
  }

  export type SeatAssignementMinOrderByAggregateInput = {
    id?: SortOrder
    pickupAdressId?: SortOrder
    dropoffAdressId?: SortOrder
    status?: SortOrder
    qrCode?: SortOrder
    userRating?: SortOrder
    message?: SortOrder
    tripId?: SortOrder
    passengerId?: SortOrder
    pickupType?: SortOrder
    dropoffType?: SortOrder
  }

  export type SeatAssignementSumOrderByAggregateInput = {
    userRating?: SortOrder
  }

  export type FloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type VehicleRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type RealtimeTripDataListRelationFilter = {
    every?: RealtimeTripDataWhereInput
    some?: RealtimeTripDataWhereInput
    none?: RealtimeTripDataWhereInput
  }

  export type RealtimeTripDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TripCountOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    status?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    startAddressId?: SortOrder
    endAddressId?: SortOrder
    maxPassengers?: SortOrder
    estimatedStartTime?: SortOrder
    estimatedArrivalTime?: SortOrder
    actualDepartureTime?: SortOrder
    actualArrivalTime?: SortOrder
    actualDistance?: SortOrder
    vehicleId?: SortOrder
    description?: SortOrder
  }

  export type TripAvgOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    maxPassengers?: SortOrder
    actualDistance?: SortOrder
  }

  export type TripMaxOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    status?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    startAddressId?: SortOrder
    endAddressId?: SortOrder
    maxPassengers?: SortOrder
    estimatedStartTime?: SortOrder
    estimatedArrivalTime?: SortOrder
    actualDepartureTime?: SortOrder
    actualArrivalTime?: SortOrder
    actualDistance?: SortOrder
    vehicleId?: SortOrder
    description?: SortOrder
  }

  export type TripMinOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    status?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    startAddressId?: SortOrder
    endAddressId?: SortOrder
    maxPassengers?: SortOrder
    estimatedStartTime?: SortOrder
    estimatedArrivalTime?: SortOrder
    actualDepartureTime?: SortOrder
    actualArrivalTime?: SortOrder
    actualDistance?: SortOrder
    vehicleId?: SortOrder
    description?: SortOrder
  }

  export type TripSumOrderByAggregateInput = {
    price?: SortOrder
    rating?: SortOrder
    maxPassengers?: SortOrder
    actualDistance?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type CoordinatesListRelationFilter = {
    every?: CoordinatesWhereInput
    some?: CoordinatesWhereInput
    none?: CoordinatesWhereInput
  }

  export type CoordinatesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AOICountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AOIMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AOIMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RealtimeCoordinatesRelationFilter = {
    is?: RealtimeCoordinatesWhereInput
    isNot?: RealtimeCoordinatesWhereInput
  }

  export type RealtimeTripDataCountOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    timestamp?: SortOrder
    seats?: SortOrder
    provider?: SortOrder
    mocked?: SortOrder
    coordinatesId?: SortOrder
  }

  export type RealtimeTripDataAvgOrderByAggregateInput = {
    seats?: SortOrder
    coordinatesId?: SortOrder
  }

  export type RealtimeTripDataMaxOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    timestamp?: SortOrder
    seats?: SortOrder
    provider?: SortOrder
    mocked?: SortOrder
    coordinatesId?: SortOrder
  }

  export type RealtimeTripDataMinOrderByAggregateInput = {
    id?: SortOrder
    tripId?: SortOrder
    timestamp?: SortOrder
    seats?: SortOrder
    provider?: SortOrder
    mocked?: SortOrder
    coordinatesId?: SortOrder
  }

  export type RealtimeTripDataSumOrderByAggregateInput = {
    seats?: SortOrder
    coordinatesId?: SortOrder
  }

  export type RealtimeCoordinatesCountOrderByAggregateInput = {
    id?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    altitudeAccuracy?: SortOrder
    heading?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
  }

  export type RealtimeCoordinatesAvgOrderByAggregateInput = {
    id?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    altitudeAccuracy?: SortOrder
    heading?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
  }

  export type RealtimeCoordinatesMaxOrderByAggregateInput = {
    id?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    altitudeAccuracy?: SortOrder
    heading?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
  }

  export type RealtimeCoordinatesMinOrderByAggregateInput = {
    id?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    altitudeAccuracy?: SortOrder
    heading?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
  }

  export type RealtimeCoordinatesSumOrderByAggregateInput = {
    id?: SortOrder
    accuracy?: SortOrder
    altitude?: SortOrder
    altitudeAccuracy?: SortOrder
    heading?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    speed?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TripCreateNestedManyWithoutDriverInput = {
    create?: XOR<Enumerable<TripCreateWithoutDriverInput>, Enumerable<TripUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutDriverInput>
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: Enumerable<TripWhereUniqueInput>
  }

  export type VehicleCreateNestedManyWithoutDriverInput = {
    create?: XOR<Enumerable<VehicleCreateWithoutDriverInput>, Enumerable<VehicleUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<VehicleCreateOrConnectWithoutDriverInput>
    createMany?: VehicleCreateManyDriverInputEnvelope
    connect?: Enumerable<VehicleWhereUniqueInput>
  }

  export type SeatAssignementCreateNestedManyWithoutPassengerInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutPassengerInput>, Enumerable<SeatAssignementUncheckedCreateWithoutPassengerInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutPassengerInput>
    createMany?: SeatAssignementCreateManyPassengerInputEnvelope
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
  }

  export type TripUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<Enumerable<TripCreateWithoutDriverInput>, Enumerable<TripUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutDriverInput>
    createMany?: TripCreateManyDriverInputEnvelope
    connect?: Enumerable<TripWhereUniqueInput>
  }

  export type VehicleUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<Enumerable<VehicleCreateWithoutDriverInput>, Enumerable<VehicleUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<VehicleCreateOrConnectWithoutDriverInput>
    createMany?: VehicleCreateManyDriverInputEnvelope
    connect?: Enumerable<VehicleWhereUniqueInput>
  }

  export type SeatAssignementUncheckedCreateNestedManyWithoutPassengerInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutPassengerInput>, Enumerable<SeatAssignementUncheckedCreateWithoutPassengerInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutPassengerInput>
    createMany?: SeatAssignementCreateManyPassengerInputEnvelope
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TripUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Enumerable<TripCreateWithoutDriverInput>, Enumerable<TripUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutDriverInput>
    upsert?: Enumerable<TripUpsertWithWhereUniqueWithoutDriverInput>
    createMany?: TripCreateManyDriverInputEnvelope
    set?: Enumerable<TripWhereUniqueInput>
    disconnect?: Enumerable<TripWhereUniqueInput>
    delete?: Enumerable<TripWhereUniqueInput>
    connect?: Enumerable<TripWhereUniqueInput>
    update?: Enumerable<TripUpdateWithWhereUniqueWithoutDriverInput>
    updateMany?: Enumerable<TripUpdateManyWithWhereWithoutDriverInput>
    deleteMany?: Enumerable<TripScalarWhereInput>
  }

  export type VehicleUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Enumerable<VehicleCreateWithoutDriverInput>, Enumerable<VehicleUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<VehicleCreateOrConnectWithoutDriverInput>
    upsert?: Enumerable<VehicleUpsertWithWhereUniqueWithoutDriverInput>
    createMany?: VehicleCreateManyDriverInputEnvelope
    set?: Enumerable<VehicleWhereUniqueInput>
    disconnect?: Enumerable<VehicleWhereUniqueInput>
    delete?: Enumerable<VehicleWhereUniqueInput>
    connect?: Enumerable<VehicleWhereUniqueInput>
    update?: Enumerable<VehicleUpdateWithWhereUniqueWithoutDriverInput>
    updateMany?: Enumerable<VehicleUpdateManyWithWhereWithoutDriverInput>
    deleteMany?: Enumerable<VehicleScalarWhereInput>
  }

  export type SeatAssignementUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutPassengerInput>, Enumerable<SeatAssignementUncheckedCreateWithoutPassengerInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutPassengerInput>
    upsert?: Enumerable<SeatAssignementUpsertWithWhereUniqueWithoutPassengerInput>
    createMany?: SeatAssignementCreateManyPassengerInputEnvelope
    set?: Enumerable<SeatAssignementWhereUniqueInput>
    disconnect?: Enumerable<SeatAssignementWhereUniqueInput>
    delete?: Enumerable<SeatAssignementWhereUniqueInput>
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
    update?: Enumerable<SeatAssignementUpdateWithWhereUniqueWithoutPassengerInput>
    updateMany?: Enumerable<SeatAssignementUpdateManyWithWhereWithoutPassengerInput>
    deleteMany?: Enumerable<SeatAssignementScalarWhereInput>
  }

  export type TripUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Enumerable<TripCreateWithoutDriverInput>, Enumerable<TripUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutDriverInput>
    upsert?: Enumerable<TripUpsertWithWhereUniqueWithoutDriverInput>
    createMany?: TripCreateManyDriverInputEnvelope
    set?: Enumerable<TripWhereUniqueInput>
    disconnect?: Enumerable<TripWhereUniqueInput>
    delete?: Enumerable<TripWhereUniqueInput>
    connect?: Enumerable<TripWhereUniqueInput>
    update?: Enumerable<TripUpdateWithWhereUniqueWithoutDriverInput>
    updateMany?: Enumerable<TripUpdateManyWithWhereWithoutDriverInput>
    deleteMany?: Enumerable<TripScalarWhereInput>
  }

  export type VehicleUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<Enumerable<VehicleCreateWithoutDriverInput>, Enumerable<VehicleUncheckedCreateWithoutDriverInput>>
    connectOrCreate?: Enumerable<VehicleCreateOrConnectWithoutDriverInput>
    upsert?: Enumerable<VehicleUpsertWithWhereUniqueWithoutDriverInput>
    createMany?: VehicleCreateManyDriverInputEnvelope
    set?: Enumerable<VehicleWhereUniqueInput>
    disconnect?: Enumerable<VehicleWhereUniqueInput>
    delete?: Enumerable<VehicleWhereUniqueInput>
    connect?: Enumerable<VehicleWhereUniqueInput>
    update?: Enumerable<VehicleUpdateWithWhereUniqueWithoutDriverInput>
    updateMany?: Enumerable<VehicleUpdateManyWithWhereWithoutDriverInput>
    deleteMany?: Enumerable<VehicleScalarWhereInput>
  }

  export type SeatAssignementUncheckedUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutPassengerInput>, Enumerable<SeatAssignementUncheckedCreateWithoutPassengerInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutPassengerInput>
    upsert?: Enumerable<SeatAssignementUpsertWithWhereUniqueWithoutPassengerInput>
    createMany?: SeatAssignementCreateManyPassengerInputEnvelope
    set?: Enumerable<SeatAssignementWhereUniqueInput>
    disconnect?: Enumerable<SeatAssignementWhereUniqueInput>
    delete?: Enumerable<SeatAssignementWhereUniqueInput>
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
    update?: Enumerable<SeatAssignementUpdateWithWhereUniqueWithoutPassengerInput>
    updateMany?: Enumerable<SeatAssignementUpdateManyWithWhereWithoutPassengerInput>
    deleteMany?: Enumerable<SeatAssignementScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutUserInput>, Enumerable<AccountUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AccountCreateManyUserInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type VehicleModelCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<VehicleModelCreateWithoutVehiclesInput, VehicleModelUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: VehicleModelCreateOrConnectWithoutVehiclesInput
    connect?: VehicleModelWhereUniqueInput
  }

  export type MobileUserCreateNestedOneWithoutVehicleInput = {
    create?: XOR<MobileUserCreateWithoutVehicleInput, MobileUserUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: MobileUserCreateOrConnectWithoutVehicleInput
    connect?: MobileUserWhereUniqueInput
  }

  export type TripCreateNestedManyWithoutVehicleInput = {
    create?: XOR<Enumerable<TripCreateWithoutVehicleInput>, Enumerable<TripUncheckedCreateWithoutVehicleInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutVehicleInput>
    createMany?: TripCreateManyVehicleInputEnvelope
    connect?: Enumerable<TripWhereUniqueInput>
  }

  export type TripUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<Enumerable<TripCreateWithoutVehicleInput>, Enumerable<TripUncheckedCreateWithoutVehicleInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutVehicleInput>
    createMany?: TripCreateManyVehicleInputEnvelope
    connect?: Enumerable<TripWhereUniqueInput>
  }

  export type VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<VehicleModelCreateWithoutVehiclesInput, VehicleModelUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: VehicleModelCreateOrConnectWithoutVehiclesInput
    upsert?: VehicleModelUpsertWithoutVehiclesInput
    connect?: VehicleModelWhereUniqueInput
    update?: XOR<VehicleModelUpdateWithoutVehiclesInput, VehicleModelUncheckedUpdateWithoutVehiclesInput>
  }

  export type MobileUserUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<MobileUserCreateWithoutVehicleInput, MobileUserUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: MobileUserCreateOrConnectWithoutVehicleInput
    upsert?: MobileUserUpsertWithoutVehicleInput
    connect?: MobileUserWhereUniqueInput
    update?: XOR<MobileUserUpdateWithoutVehicleInput, MobileUserUncheckedUpdateWithoutVehicleInput>
  }

  export type TripUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<Enumerable<TripCreateWithoutVehicleInput>, Enumerable<TripUncheckedCreateWithoutVehicleInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutVehicleInput>
    upsert?: Enumerable<TripUpsertWithWhereUniqueWithoutVehicleInput>
    createMany?: TripCreateManyVehicleInputEnvelope
    set?: Enumerable<TripWhereUniqueInput>
    disconnect?: Enumerable<TripWhereUniqueInput>
    delete?: Enumerable<TripWhereUniqueInput>
    connect?: Enumerable<TripWhereUniqueInput>
    update?: Enumerable<TripUpdateWithWhereUniqueWithoutVehicleInput>
    updateMany?: Enumerable<TripUpdateManyWithWhereWithoutVehicleInput>
    deleteMany?: Enumerable<TripScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TripUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<Enumerable<TripCreateWithoutVehicleInput>, Enumerable<TripUncheckedCreateWithoutVehicleInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutVehicleInput>
    upsert?: Enumerable<TripUpsertWithWhereUniqueWithoutVehicleInput>
    createMany?: TripCreateManyVehicleInputEnvelope
    set?: Enumerable<TripWhereUniqueInput>
    disconnect?: Enumerable<TripWhereUniqueInput>
    delete?: Enumerable<TripWhereUniqueInput>
    connect?: Enumerable<TripWhereUniqueInput>
    update?: Enumerable<TripUpdateWithWhereUniqueWithoutVehicleInput>
    updateMany?: Enumerable<TripUpdateManyWithWhereWithoutVehicleInput>
    deleteMany?: Enumerable<TripScalarWhereInput>
  }

  export type VehicleModelCreateNestedManyWithoutMakeInput = {
    create?: XOR<Enumerable<VehicleModelCreateWithoutMakeInput>, Enumerable<VehicleModelUncheckedCreateWithoutMakeInput>>
    connectOrCreate?: Enumerable<VehicleModelCreateOrConnectWithoutMakeInput>
    createMany?: VehicleModelCreateManyMakeInputEnvelope
    connect?: Enumerable<VehicleModelWhereUniqueInput>
  }

  export type VehicleModelUncheckedCreateNestedManyWithoutMakeInput = {
    create?: XOR<Enumerable<VehicleModelCreateWithoutMakeInput>, Enumerable<VehicleModelUncheckedCreateWithoutMakeInput>>
    connectOrCreate?: Enumerable<VehicleModelCreateOrConnectWithoutMakeInput>
    createMany?: VehicleModelCreateManyMakeInputEnvelope
    connect?: Enumerable<VehicleModelWhereUniqueInput>
  }

  export type VehicleModelUpdateManyWithoutMakeNestedInput = {
    create?: XOR<Enumerable<VehicleModelCreateWithoutMakeInput>, Enumerable<VehicleModelUncheckedCreateWithoutMakeInput>>
    connectOrCreate?: Enumerable<VehicleModelCreateOrConnectWithoutMakeInput>
    upsert?: Enumerable<VehicleModelUpsertWithWhereUniqueWithoutMakeInput>
    createMany?: VehicleModelCreateManyMakeInputEnvelope
    set?: Enumerable<VehicleModelWhereUniqueInput>
    disconnect?: Enumerable<VehicleModelWhereUniqueInput>
    delete?: Enumerable<VehicleModelWhereUniqueInput>
    connect?: Enumerable<VehicleModelWhereUniqueInput>
    update?: Enumerable<VehicleModelUpdateWithWhereUniqueWithoutMakeInput>
    updateMany?: Enumerable<VehicleModelUpdateManyWithWhereWithoutMakeInput>
    deleteMany?: Enumerable<VehicleModelScalarWhereInput>
  }

  export type VehicleModelUncheckedUpdateManyWithoutMakeNestedInput = {
    create?: XOR<Enumerable<VehicleModelCreateWithoutMakeInput>, Enumerable<VehicleModelUncheckedCreateWithoutMakeInput>>
    connectOrCreate?: Enumerable<VehicleModelCreateOrConnectWithoutMakeInput>
    upsert?: Enumerable<VehicleModelUpsertWithWhereUniqueWithoutMakeInput>
    createMany?: VehicleModelCreateManyMakeInputEnvelope
    set?: Enumerable<VehicleModelWhereUniqueInput>
    disconnect?: Enumerable<VehicleModelWhereUniqueInput>
    delete?: Enumerable<VehicleModelWhereUniqueInput>
    connect?: Enumerable<VehicleModelWhereUniqueInput>
    update?: Enumerable<VehicleModelUpdateWithWhereUniqueWithoutMakeInput>
    updateMany?: Enumerable<VehicleModelUpdateManyWithWhereWithoutMakeInput>
    deleteMany?: Enumerable<VehicleModelScalarWhereInput>
  }

  export type VehicleModelCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<VehicleModelCreateWithoutTypeInput>, Enumerable<VehicleModelUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<VehicleModelCreateOrConnectWithoutTypeInput>
    createMany?: VehicleModelCreateManyTypeInputEnvelope
    connect?: Enumerable<VehicleModelWhereUniqueInput>
  }

  export type VehicleModelUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<Enumerable<VehicleModelCreateWithoutTypeInput>, Enumerable<VehicleModelUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<VehicleModelCreateOrConnectWithoutTypeInput>
    createMany?: VehicleModelCreateManyTypeInputEnvelope
    connect?: Enumerable<VehicleModelWhereUniqueInput>
  }

  export type VehicleModelUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<VehicleModelCreateWithoutTypeInput>, Enumerable<VehicleModelUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<VehicleModelCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<VehicleModelUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: VehicleModelCreateManyTypeInputEnvelope
    set?: Enumerable<VehicleModelWhereUniqueInput>
    disconnect?: Enumerable<VehicleModelWhereUniqueInput>
    delete?: Enumerable<VehicleModelWhereUniqueInput>
    connect?: Enumerable<VehicleModelWhereUniqueInput>
    update?: Enumerable<VehicleModelUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<VehicleModelUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<VehicleModelScalarWhereInput>
  }

  export type VehicleModelUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<Enumerable<VehicleModelCreateWithoutTypeInput>, Enumerable<VehicleModelUncheckedCreateWithoutTypeInput>>
    connectOrCreate?: Enumerable<VehicleModelCreateOrConnectWithoutTypeInput>
    upsert?: Enumerable<VehicleModelUpsertWithWhereUniqueWithoutTypeInput>
    createMany?: VehicleModelCreateManyTypeInputEnvelope
    set?: Enumerable<VehicleModelWhereUniqueInput>
    disconnect?: Enumerable<VehicleModelWhereUniqueInput>
    delete?: Enumerable<VehicleModelWhereUniqueInput>
    connect?: Enumerable<VehicleModelWhereUniqueInput>
    update?: Enumerable<VehicleModelUpdateWithWhereUniqueWithoutTypeInput>
    updateMany?: Enumerable<VehicleModelUpdateManyWithWhereWithoutTypeInput>
    deleteMany?: Enumerable<VehicleModelScalarWhereInput>
  }

  export type VehicleMakeCreateNestedOneWithoutModelsInput = {
    create?: XOR<VehicleMakeCreateWithoutModelsInput, VehicleMakeUncheckedCreateWithoutModelsInput>
    connectOrCreate?: VehicleMakeCreateOrConnectWithoutModelsInput
    connect?: VehicleMakeWhereUniqueInput
  }

  export type VehicleCreateNestedManyWithoutModelInput = {
    create?: XOR<Enumerable<VehicleCreateWithoutModelInput>, Enumerable<VehicleUncheckedCreateWithoutModelInput>>
    connectOrCreate?: Enumerable<VehicleCreateOrConnectWithoutModelInput>
    createMany?: VehicleCreateManyModelInputEnvelope
    connect?: Enumerable<VehicleWhereUniqueInput>
  }

  export type VehicleTypeCreateNestedOneWithoutModelsInput = {
    create?: XOR<VehicleTypeCreateWithoutModelsInput, VehicleTypeUncheckedCreateWithoutModelsInput>
    connectOrCreate?: VehicleTypeCreateOrConnectWithoutModelsInput
    connect?: VehicleTypeWhereUniqueInput
  }

  export type VehicleUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<Enumerable<VehicleCreateWithoutModelInput>, Enumerable<VehicleUncheckedCreateWithoutModelInput>>
    connectOrCreate?: Enumerable<VehicleCreateOrConnectWithoutModelInput>
    createMany?: VehicleCreateManyModelInputEnvelope
    connect?: Enumerable<VehicleWhereUniqueInput>
  }

  export type VehicleMakeUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<VehicleMakeCreateWithoutModelsInput, VehicleMakeUncheckedCreateWithoutModelsInput>
    connectOrCreate?: VehicleMakeCreateOrConnectWithoutModelsInput
    upsert?: VehicleMakeUpsertWithoutModelsInput
    connect?: VehicleMakeWhereUniqueInput
    update?: XOR<VehicleMakeUpdateWithoutModelsInput, VehicleMakeUncheckedUpdateWithoutModelsInput>
  }

  export type VehicleUpdateManyWithoutModelNestedInput = {
    create?: XOR<Enumerable<VehicleCreateWithoutModelInput>, Enumerable<VehicleUncheckedCreateWithoutModelInput>>
    connectOrCreate?: Enumerable<VehicleCreateOrConnectWithoutModelInput>
    upsert?: Enumerable<VehicleUpsertWithWhereUniqueWithoutModelInput>
    createMany?: VehicleCreateManyModelInputEnvelope
    set?: Enumerable<VehicleWhereUniqueInput>
    disconnect?: Enumerable<VehicleWhereUniqueInput>
    delete?: Enumerable<VehicleWhereUniqueInput>
    connect?: Enumerable<VehicleWhereUniqueInput>
    update?: Enumerable<VehicleUpdateWithWhereUniqueWithoutModelInput>
    updateMany?: Enumerable<VehicleUpdateManyWithWhereWithoutModelInput>
    deleteMany?: Enumerable<VehicleScalarWhereInput>
  }

  export type VehicleTypeUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<VehicleTypeCreateWithoutModelsInput, VehicleTypeUncheckedCreateWithoutModelsInput>
    connectOrCreate?: VehicleTypeCreateOrConnectWithoutModelsInput
    upsert?: VehicleTypeUpsertWithoutModelsInput
    connect?: VehicleTypeWhereUniqueInput
    update?: XOR<VehicleTypeUpdateWithoutModelsInput, VehicleTypeUncheckedUpdateWithoutModelsInput>
  }

  export type VehicleUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<Enumerable<VehicleCreateWithoutModelInput>, Enumerable<VehicleUncheckedCreateWithoutModelInput>>
    connectOrCreate?: Enumerable<VehicleCreateOrConnectWithoutModelInput>
    upsert?: Enumerable<VehicleUpsertWithWhereUniqueWithoutModelInput>
    createMany?: VehicleCreateManyModelInputEnvelope
    set?: Enumerable<VehicleWhereUniqueInput>
    disconnect?: Enumerable<VehicleWhereUniqueInput>
    delete?: Enumerable<VehicleWhereUniqueInput>
    connect?: Enumerable<VehicleWhereUniqueInput>
    update?: Enumerable<VehicleUpdateWithWhereUniqueWithoutModelInput>
    updateMany?: Enumerable<VehicleUpdateManyWithWhereWithoutModelInput>
    deleteMany?: Enumerable<VehicleScalarWhereInput>
  }

  export type CoordinatesCreateNestedOneWithoutMilestoneInput = {
    create?: XOR<CoordinatesCreateWithoutMilestoneInput, CoordinatesUncheckedCreateWithoutMilestoneInput>
    connectOrCreate?: CoordinatesCreateOrConnectWithoutMilestoneInput
    connect?: CoordinatesWhereUniqueInput
  }

  export type CoordinatesUpdateOneWithoutMilestoneNestedInput = {
    create?: XOR<CoordinatesCreateWithoutMilestoneInput, CoordinatesUncheckedCreateWithoutMilestoneInput>
    connectOrCreate?: CoordinatesCreateOrConnectWithoutMilestoneInput
    upsert?: CoordinatesUpsertWithoutMilestoneInput
    disconnect?: boolean
    delete?: boolean
    connect?: CoordinatesWhereUniqueInput
    update?: XOR<CoordinatesUpdateWithoutMilestoneInput, CoordinatesUncheckedUpdateWithoutMilestoneInput>
  }

  export type MilestoneCreateNestedManyWithoutCoordiantesInput = {
    create?: XOR<Enumerable<MilestoneCreateWithoutCoordiantesInput>, Enumerable<MilestoneUncheckedCreateWithoutCoordiantesInput>>
    connectOrCreate?: Enumerable<MilestoneCreateOrConnectWithoutCoordiantesInput>
    createMany?: MilestoneCreateManyCoordiantesInputEnvelope
    connect?: Enumerable<MilestoneWhereUniqueInput>
  }

  export type AdressCreateNestedManyWithoutCoordinatesInput = {
    create?: XOR<Enumerable<AdressCreateWithoutCoordinatesInput>, Enumerable<AdressUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<AdressCreateOrConnectWithoutCoordinatesInput>
    createMany?: AdressCreateManyCoordinatesInputEnvelope
    connect?: Enumerable<AdressWhereUniqueInput>
  }

  export type AOICreateNestedManyWithoutCoordinatesInput = {
    create?: XOR<Enumerable<AOICreateWithoutCoordinatesInput>, Enumerable<AOIUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<AOICreateOrConnectWithoutCoordinatesInput>
    connect?: Enumerable<AOIWhereUniqueInput>
  }

  export type MilestoneUncheckedCreateNestedManyWithoutCoordiantesInput = {
    create?: XOR<Enumerable<MilestoneCreateWithoutCoordiantesInput>, Enumerable<MilestoneUncheckedCreateWithoutCoordiantesInput>>
    connectOrCreate?: Enumerable<MilestoneCreateOrConnectWithoutCoordiantesInput>
    createMany?: MilestoneCreateManyCoordiantesInputEnvelope
    connect?: Enumerable<MilestoneWhereUniqueInput>
  }

  export type AdressUncheckedCreateNestedManyWithoutCoordinatesInput = {
    create?: XOR<Enumerable<AdressCreateWithoutCoordinatesInput>, Enumerable<AdressUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<AdressCreateOrConnectWithoutCoordinatesInput>
    createMany?: AdressCreateManyCoordinatesInputEnvelope
    connect?: Enumerable<AdressWhereUniqueInput>
  }

  export type AOIUncheckedCreateNestedManyWithoutCoordinatesInput = {
    create?: XOR<Enumerable<AOICreateWithoutCoordinatesInput>, Enumerable<AOIUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<AOICreateOrConnectWithoutCoordinatesInput>
    connect?: Enumerable<AOIWhereUniqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MilestoneUpdateManyWithoutCoordiantesNestedInput = {
    create?: XOR<Enumerable<MilestoneCreateWithoutCoordiantesInput>, Enumerable<MilestoneUncheckedCreateWithoutCoordiantesInput>>
    connectOrCreate?: Enumerable<MilestoneCreateOrConnectWithoutCoordiantesInput>
    upsert?: Enumerable<MilestoneUpsertWithWhereUniqueWithoutCoordiantesInput>
    createMany?: MilestoneCreateManyCoordiantesInputEnvelope
    set?: Enumerable<MilestoneWhereUniqueInput>
    disconnect?: Enumerable<MilestoneWhereUniqueInput>
    delete?: Enumerable<MilestoneWhereUniqueInput>
    connect?: Enumerable<MilestoneWhereUniqueInput>
    update?: Enumerable<MilestoneUpdateWithWhereUniqueWithoutCoordiantesInput>
    updateMany?: Enumerable<MilestoneUpdateManyWithWhereWithoutCoordiantesInput>
    deleteMany?: Enumerable<MilestoneScalarWhereInput>
  }

  export type AdressUpdateManyWithoutCoordinatesNestedInput = {
    create?: XOR<Enumerable<AdressCreateWithoutCoordinatesInput>, Enumerable<AdressUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<AdressCreateOrConnectWithoutCoordinatesInput>
    upsert?: Enumerable<AdressUpsertWithWhereUniqueWithoutCoordinatesInput>
    createMany?: AdressCreateManyCoordinatesInputEnvelope
    set?: Enumerable<AdressWhereUniqueInput>
    disconnect?: Enumerable<AdressWhereUniqueInput>
    delete?: Enumerable<AdressWhereUniqueInput>
    connect?: Enumerable<AdressWhereUniqueInput>
    update?: Enumerable<AdressUpdateWithWhereUniqueWithoutCoordinatesInput>
    updateMany?: Enumerable<AdressUpdateManyWithWhereWithoutCoordinatesInput>
    deleteMany?: Enumerable<AdressScalarWhereInput>
  }

  export type AOIUpdateManyWithoutCoordinatesNestedInput = {
    create?: XOR<Enumerable<AOICreateWithoutCoordinatesInput>, Enumerable<AOIUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<AOICreateOrConnectWithoutCoordinatesInput>
    upsert?: Enumerable<AOIUpsertWithWhereUniqueWithoutCoordinatesInput>
    set?: Enumerable<AOIWhereUniqueInput>
    disconnect?: Enumerable<AOIWhereUniqueInput>
    delete?: Enumerable<AOIWhereUniqueInput>
    connect?: Enumerable<AOIWhereUniqueInput>
    update?: Enumerable<AOIUpdateWithWhereUniqueWithoutCoordinatesInput>
    updateMany?: Enumerable<AOIUpdateManyWithWhereWithoutCoordinatesInput>
    deleteMany?: Enumerable<AOIScalarWhereInput>
  }

  export type MilestoneUncheckedUpdateManyWithoutCoordiantesNestedInput = {
    create?: XOR<Enumerable<MilestoneCreateWithoutCoordiantesInput>, Enumerable<MilestoneUncheckedCreateWithoutCoordiantesInput>>
    connectOrCreate?: Enumerable<MilestoneCreateOrConnectWithoutCoordiantesInput>
    upsert?: Enumerable<MilestoneUpsertWithWhereUniqueWithoutCoordiantesInput>
    createMany?: MilestoneCreateManyCoordiantesInputEnvelope
    set?: Enumerable<MilestoneWhereUniqueInput>
    disconnect?: Enumerable<MilestoneWhereUniqueInput>
    delete?: Enumerable<MilestoneWhereUniqueInput>
    connect?: Enumerable<MilestoneWhereUniqueInput>
    update?: Enumerable<MilestoneUpdateWithWhereUniqueWithoutCoordiantesInput>
    updateMany?: Enumerable<MilestoneUpdateManyWithWhereWithoutCoordiantesInput>
    deleteMany?: Enumerable<MilestoneScalarWhereInput>
  }

  export type AdressUncheckedUpdateManyWithoutCoordinatesNestedInput = {
    create?: XOR<Enumerable<AdressCreateWithoutCoordinatesInput>, Enumerable<AdressUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<AdressCreateOrConnectWithoutCoordinatesInput>
    upsert?: Enumerable<AdressUpsertWithWhereUniqueWithoutCoordinatesInput>
    createMany?: AdressCreateManyCoordinatesInputEnvelope
    set?: Enumerable<AdressWhereUniqueInput>
    disconnect?: Enumerable<AdressWhereUniqueInput>
    delete?: Enumerable<AdressWhereUniqueInput>
    connect?: Enumerable<AdressWhereUniqueInput>
    update?: Enumerable<AdressUpdateWithWhereUniqueWithoutCoordinatesInput>
    updateMany?: Enumerable<AdressUpdateManyWithWhereWithoutCoordinatesInput>
    deleteMany?: Enumerable<AdressScalarWhereInput>
  }

  export type AOIUncheckedUpdateManyWithoutCoordinatesNestedInput = {
    create?: XOR<Enumerable<AOICreateWithoutCoordinatesInput>, Enumerable<AOIUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<AOICreateOrConnectWithoutCoordinatesInput>
    upsert?: Enumerable<AOIUpsertWithWhereUniqueWithoutCoordinatesInput>
    set?: Enumerable<AOIWhereUniqueInput>
    disconnect?: Enumerable<AOIWhereUniqueInput>
    delete?: Enumerable<AOIWhereUniqueInput>
    connect?: Enumerable<AOIWhereUniqueInput>
    update?: Enumerable<AOIUpdateWithWhereUniqueWithoutCoordinatesInput>
    updateMany?: Enumerable<AOIUpdateManyWithWhereWithoutCoordinatesInput>
    deleteMany?: Enumerable<AOIScalarWhereInput>
  }

  export type CoordinatesCreateNestedOneWithoutAdressInput = {
    create?: XOR<CoordinatesCreateWithoutAdressInput, CoordinatesUncheckedCreateWithoutAdressInput>
    connectOrCreate?: CoordinatesCreateOrConnectWithoutAdressInput
    connect?: CoordinatesWhereUniqueInput
  }

  export type SeatAssignementCreateNestedManyWithoutPickupAddressInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutPickupAddressInput>, Enumerable<SeatAssignementUncheckedCreateWithoutPickupAddressInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutPickupAddressInput>
    createMany?: SeatAssignementCreateManyPickupAddressInputEnvelope
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
  }

  export type SeatAssignementCreateNestedManyWithoutDropoffAddressInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutDropoffAddressInput>, Enumerable<SeatAssignementUncheckedCreateWithoutDropoffAddressInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutDropoffAddressInput>
    createMany?: SeatAssignementCreateManyDropoffAddressInputEnvelope
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
  }

  export type TripCreateNestedManyWithoutStartAddressInput = {
    create?: XOR<Enumerable<TripCreateWithoutStartAddressInput>, Enumerable<TripUncheckedCreateWithoutStartAddressInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutStartAddressInput>
    createMany?: TripCreateManyStartAddressInputEnvelope
    connect?: Enumerable<TripWhereUniqueInput>
  }

  export type TripCreateNestedManyWithoutEndAddressInput = {
    create?: XOR<Enumerable<TripCreateWithoutEndAddressInput>, Enumerable<TripUncheckedCreateWithoutEndAddressInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutEndAddressInput>
    createMany?: TripCreateManyEndAddressInputEnvelope
    connect?: Enumerable<TripWhereUniqueInput>
  }

  export type SeatAssignementUncheckedCreateNestedManyWithoutPickupAddressInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutPickupAddressInput>, Enumerable<SeatAssignementUncheckedCreateWithoutPickupAddressInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutPickupAddressInput>
    createMany?: SeatAssignementCreateManyPickupAddressInputEnvelope
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
  }

  export type SeatAssignementUncheckedCreateNestedManyWithoutDropoffAddressInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutDropoffAddressInput>, Enumerable<SeatAssignementUncheckedCreateWithoutDropoffAddressInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutDropoffAddressInput>
    createMany?: SeatAssignementCreateManyDropoffAddressInputEnvelope
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
  }

  export type TripUncheckedCreateNestedManyWithoutStartAddressInput = {
    create?: XOR<Enumerable<TripCreateWithoutStartAddressInput>, Enumerable<TripUncheckedCreateWithoutStartAddressInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutStartAddressInput>
    createMany?: TripCreateManyStartAddressInputEnvelope
    connect?: Enumerable<TripWhereUniqueInput>
  }

  export type TripUncheckedCreateNestedManyWithoutEndAddressInput = {
    create?: XOR<Enumerable<TripCreateWithoutEndAddressInput>, Enumerable<TripUncheckedCreateWithoutEndAddressInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutEndAddressInput>
    createMany?: TripCreateManyEndAddressInputEnvelope
    connect?: Enumerable<TripWhereUniqueInput>
  }

  export type CoordinatesUpdateOneRequiredWithoutAdressNestedInput = {
    create?: XOR<CoordinatesCreateWithoutAdressInput, CoordinatesUncheckedCreateWithoutAdressInput>
    connectOrCreate?: CoordinatesCreateOrConnectWithoutAdressInput
    upsert?: CoordinatesUpsertWithoutAdressInput
    connect?: CoordinatesWhereUniqueInput
    update?: XOR<CoordinatesUpdateWithoutAdressInput, CoordinatesUncheckedUpdateWithoutAdressInput>
  }

  export type SeatAssignementUpdateManyWithoutPickupAddressNestedInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutPickupAddressInput>, Enumerable<SeatAssignementUncheckedCreateWithoutPickupAddressInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutPickupAddressInput>
    upsert?: Enumerable<SeatAssignementUpsertWithWhereUniqueWithoutPickupAddressInput>
    createMany?: SeatAssignementCreateManyPickupAddressInputEnvelope
    set?: Enumerable<SeatAssignementWhereUniqueInput>
    disconnect?: Enumerable<SeatAssignementWhereUniqueInput>
    delete?: Enumerable<SeatAssignementWhereUniqueInput>
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
    update?: Enumerable<SeatAssignementUpdateWithWhereUniqueWithoutPickupAddressInput>
    updateMany?: Enumerable<SeatAssignementUpdateManyWithWhereWithoutPickupAddressInput>
    deleteMany?: Enumerable<SeatAssignementScalarWhereInput>
  }

  export type SeatAssignementUpdateManyWithoutDropoffAddressNestedInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutDropoffAddressInput>, Enumerable<SeatAssignementUncheckedCreateWithoutDropoffAddressInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutDropoffAddressInput>
    upsert?: Enumerable<SeatAssignementUpsertWithWhereUniqueWithoutDropoffAddressInput>
    createMany?: SeatAssignementCreateManyDropoffAddressInputEnvelope
    set?: Enumerable<SeatAssignementWhereUniqueInput>
    disconnect?: Enumerable<SeatAssignementWhereUniqueInput>
    delete?: Enumerable<SeatAssignementWhereUniqueInput>
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
    update?: Enumerable<SeatAssignementUpdateWithWhereUniqueWithoutDropoffAddressInput>
    updateMany?: Enumerable<SeatAssignementUpdateManyWithWhereWithoutDropoffAddressInput>
    deleteMany?: Enumerable<SeatAssignementScalarWhereInput>
  }

  export type TripUpdateManyWithoutStartAddressNestedInput = {
    create?: XOR<Enumerable<TripCreateWithoutStartAddressInput>, Enumerable<TripUncheckedCreateWithoutStartAddressInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutStartAddressInput>
    upsert?: Enumerable<TripUpsertWithWhereUniqueWithoutStartAddressInput>
    createMany?: TripCreateManyStartAddressInputEnvelope
    set?: Enumerable<TripWhereUniqueInput>
    disconnect?: Enumerable<TripWhereUniqueInput>
    delete?: Enumerable<TripWhereUniqueInput>
    connect?: Enumerable<TripWhereUniqueInput>
    update?: Enumerable<TripUpdateWithWhereUniqueWithoutStartAddressInput>
    updateMany?: Enumerable<TripUpdateManyWithWhereWithoutStartAddressInput>
    deleteMany?: Enumerable<TripScalarWhereInput>
  }

  export type TripUpdateManyWithoutEndAddressNestedInput = {
    create?: XOR<Enumerable<TripCreateWithoutEndAddressInput>, Enumerable<TripUncheckedCreateWithoutEndAddressInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutEndAddressInput>
    upsert?: Enumerable<TripUpsertWithWhereUniqueWithoutEndAddressInput>
    createMany?: TripCreateManyEndAddressInputEnvelope
    set?: Enumerable<TripWhereUniqueInput>
    disconnect?: Enumerable<TripWhereUniqueInput>
    delete?: Enumerable<TripWhereUniqueInput>
    connect?: Enumerable<TripWhereUniqueInput>
    update?: Enumerable<TripUpdateWithWhereUniqueWithoutEndAddressInput>
    updateMany?: Enumerable<TripUpdateManyWithWhereWithoutEndAddressInput>
    deleteMany?: Enumerable<TripScalarWhereInput>
  }

  export type SeatAssignementUncheckedUpdateManyWithoutPickupAddressNestedInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutPickupAddressInput>, Enumerable<SeatAssignementUncheckedCreateWithoutPickupAddressInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutPickupAddressInput>
    upsert?: Enumerable<SeatAssignementUpsertWithWhereUniqueWithoutPickupAddressInput>
    createMany?: SeatAssignementCreateManyPickupAddressInputEnvelope
    set?: Enumerable<SeatAssignementWhereUniqueInput>
    disconnect?: Enumerable<SeatAssignementWhereUniqueInput>
    delete?: Enumerable<SeatAssignementWhereUniqueInput>
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
    update?: Enumerable<SeatAssignementUpdateWithWhereUniqueWithoutPickupAddressInput>
    updateMany?: Enumerable<SeatAssignementUpdateManyWithWhereWithoutPickupAddressInput>
    deleteMany?: Enumerable<SeatAssignementScalarWhereInput>
  }

  export type SeatAssignementUncheckedUpdateManyWithoutDropoffAddressNestedInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutDropoffAddressInput>, Enumerable<SeatAssignementUncheckedCreateWithoutDropoffAddressInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutDropoffAddressInput>
    upsert?: Enumerable<SeatAssignementUpsertWithWhereUniqueWithoutDropoffAddressInput>
    createMany?: SeatAssignementCreateManyDropoffAddressInputEnvelope
    set?: Enumerable<SeatAssignementWhereUniqueInput>
    disconnect?: Enumerable<SeatAssignementWhereUniqueInput>
    delete?: Enumerable<SeatAssignementWhereUniqueInput>
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
    update?: Enumerable<SeatAssignementUpdateWithWhereUniqueWithoutDropoffAddressInput>
    updateMany?: Enumerable<SeatAssignementUpdateManyWithWhereWithoutDropoffAddressInput>
    deleteMany?: Enumerable<SeatAssignementScalarWhereInput>
  }

  export type TripUncheckedUpdateManyWithoutStartAddressNestedInput = {
    create?: XOR<Enumerable<TripCreateWithoutStartAddressInput>, Enumerable<TripUncheckedCreateWithoutStartAddressInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutStartAddressInput>
    upsert?: Enumerable<TripUpsertWithWhereUniqueWithoutStartAddressInput>
    createMany?: TripCreateManyStartAddressInputEnvelope
    set?: Enumerable<TripWhereUniqueInput>
    disconnect?: Enumerable<TripWhereUniqueInput>
    delete?: Enumerable<TripWhereUniqueInput>
    connect?: Enumerable<TripWhereUniqueInput>
    update?: Enumerable<TripUpdateWithWhereUniqueWithoutStartAddressInput>
    updateMany?: Enumerable<TripUpdateManyWithWhereWithoutStartAddressInput>
    deleteMany?: Enumerable<TripScalarWhereInput>
  }

  export type TripUncheckedUpdateManyWithoutEndAddressNestedInput = {
    create?: XOR<Enumerable<TripCreateWithoutEndAddressInput>, Enumerable<TripUncheckedCreateWithoutEndAddressInput>>
    connectOrCreate?: Enumerable<TripCreateOrConnectWithoutEndAddressInput>
    upsert?: Enumerable<TripUpsertWithWhereUniqueWithoutEndAddressInput>
    createMany?: TripCreateManyEndAddressInputEnvelope
    set?: Enumerable<TripWhereUniqueInput>
    disconnect?: Enumerable<TripWhereUniqueInput>
    delete?: Enumerable<TripWhereUniqueInput>
    connect?: Enumerable<TripWhereUniqueInput>
    update?: Enumerable<TripUpdateWithWhereUniqueWithoutEndAddressInput>
    updateMany?: Enumerable<TripUpdateManyWithWhereWithoutEndAddressInput>
    deleteMany?: Enumerable<TripScalarWhereInput>
  }

  export type AdressCreateNestedOneWithoutPickUpsInput = {
    create?: XOR<AdressCreateWithoutPickUpsInput, AdressUncheckedCreateWithoutPickUpsInput>
    connectOrCreate?: AdressCreateOrConnectWithoutPickUpsInput
    connect?: AdressWhereUniqueInput
  }

  export type AdressCreateNestedOneWithoutDropOffsInput = {
    create?: XOR<AdressCreateWithoutDropOffsInput, AdressUncheckedCreateWithoutDropOffsInput>
    connectOrCreate?: AdressCreateOrConnectWithoutDropOffsInput
    connect?: AdressWhereUniqueInput
  }

  export type TripCreateNestedOneWithoutSeatAssignmentsInput = {
    create?: XOR<TripCreateWithoutSeatAssignmentsInput, TripUncheckedCreateWithoutSeatAssignmentsInput>
    connectOrCreate?: TripCreateOrConnectWithoutSeatAssignmentsInput
    connect?: TripWhereUniqueInput
  }

  export type MobileUserCreateNestedOneWithoutTripsTakenInput = {
    create?: XOR<MobileUserCreateWithoutTripsTakenInput, MobileUserUncheckedCreateWithoutTripsTakenInput>
    connectOrCreate?: MobileUserCreateOrConnectWithoutTripsTakenInput
    connect?: MobileUserWhereUniqueInput
  }

  export type AdressUpdateOneRequiredWithoutPickUpsNestedInput = {
    create?: XOR<AdressCreateWithoutPickUpsInput, AdressUncheckedCreateWithoutPickUpsInput>
    connectOrCreate?: AdressCreateOrConnectWithoutPickUpsInput
    upsert?: AdressUpsertWithoutPickUpsInput
    connect?: AdressWhereUniqueInput
    update?: XOR<AdressUpdateWithoutPickUpsInput, AdressUncheckedUpdateWithoutPickUpsInput>
  }

  export type AdressUpdateOneRequiredWithoutDropOffsNestedInput = {
    create?: XOR<AdressCreateWithoutDropOffsInput, AdressUncheckedCreateWithoutDropOffsInput>
    connectOrCreate?: AdressCreateOrConnectWithoutDropOffsInput
    upsert?: AdressUpsertWithoutDropOffsInput
    connect?: AdressWhereUniqueInput
    update?: XOR<AdressUpdateWithoutDropOffsInput, AdressUncheckedUpdateWithoutDropOffsInput>
  }

  export type TripUpdateOneRequiredWithoutSeatAssignmentsNestedInput = {
    create?: XOR<TripCreateWithoutSeatAssignmentsInput, TripUncheckedCreateWithoutSeatAssignmentsInput>
    connectOrCreate?: TripCreateOrConnectWithoutSeatAssignmentsInput
    upsert?: TripUpsertWithoutSeatAssignmentsInput
    connect?: TripWhereUniqueInput
    update?: XOR<TripUpdateWithoutSeatAssignmentsInput, TripUncheckedUpdateWithoutSeatAssignmentsInput>
  }

  export type MobileUserUpdateOneRequiredWithoutTripsTakenNestedInput = {
    create?: XOR<MobileUserCreateWithoutTripsTakenInput, MobileUserUncheckedCreateWithoutTripsTakenInput>
    connectOrCreate?: MobileUserCreateOrConnectWithoutTripsTakenInput
    upsert?: MobileUserUpsertWithoutTripsTakenInput
    connect?: MobileUserWhereUniqueInput
    update?: XOR<MobileUserUpdateWithoutTripsTakenInput, MobileUserUncheckedUpdateWithoutTripsTakenInput>
  }

  export type MobileUserCreateNestedOneWithoutTripsDrivenInput = {
    create?: XOR<MobileUserCreateWithoutTripsDrivenInput, MobileUserUncheckedCreateWithoutTripsDrivenInput>
    connectOrCreate?: MobileUserCreateOrConnectWithoutTripsDrivenInput
    connect?: MobileUserWhereUniqueInput
  }

  export type SeatAssignementCreateNestedManyWithoutTripInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutTripInput>, Enumerable<SeatAssignementUncheckedCreateWithoutTripInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutTripInput>
    createMany?: SeatAssignementCreateManyTripInputEnvelope
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
  }

  export type AdressCreateNestedOneWithoutDeparturesInput = {
    create?: XOR<AdressCreateWithoutDeparturesInput, AdressUncheckedCreateWithoutDeparturesInput>
    connectOrCreate?: AdressCreateOrConnectWithoutDeparturesInput
    connect?: AdressWhereUniqueInput
  }

  export type AdressCreateNestedOneWithoutArrivalsInput = {
    create?: XOR<AdressCreateWithoutArrivalsInput, AdressUncheckedCreateWithoutArrivalsInput>
    connectOrCreate?: AdressCreateOrConnectWithoutArrivalsInput
    connect?: AdressWhereUniqueInput
  }

  export type VehicleCreateNestedOneWithoutTripsInput = {
    create?: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTripsInput
    connect?: VehicleWhereUniqueInput
  }

  export type RealtimeTripDataCreateNestedManyWithoutTripInput = {
    create?: XOR<Enumerable<RealtimeTripDataCreateWithoutTripInput>, Enumerable<RealtimeTripDataUncheckedCreateWithoutTripInput>>
    connectOrCreate?: Enumerable<RealtimeTripDataCreateOrConnectWithoutTripInput>
    createMany?: RealtimeTripDataCreateManyTripInputEnvelope
    connect?: Enumerable<RealtimeTripDataWhereUniqueInput>
  }

  export type SeatAssignementUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutTripInput>, Enumerable<SeatAssignementUncheckedCreateWithoutTripInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutTripInput>
    createMany?: SeatAssignementCreateManyTripInputEnvelope
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
  }

  export type RealtimeTripDataUncheckedCreateNestedManyWithoutTripInput = {
    create?: XOR<Enumerable<RealtimeTripDataCreateWithoutTripInput>, Enumerable<RealtimeTripDataUncheckedCreateWithoutTripInput>>
    connectOrCreate?: Enumerable<RealtimeTripDataCreateOrConnectWithoutTripInput>
    createMany?: RealtimeTripDataCreateManyTripInputEnvelope
    connect?: Enumerable<RealtimeTripDataWhereUniqueInput>
  }

  export type MobileUserUpdateOneRequiredWithoutTripsDrivenNestedInput = {
    create?: XOR<MobileUserCreateWithoutTripsDrivenInput, MobileUserUncheckedCreateWithoutTripsDrivenInput>
    connectOrCreate?: MobileUserCreateOrConnectWithoutTripsDrivenInput
    upsert?: MobileUserUpsertWithoutTripsDrivenInput
    connect?: MobileUserWhereUniqueInput
    update?: XOR<MobileUserUpdateWithoutTripsDrivenInput, MobileUserUncheckedUpdateWithoutTripsDrivenInput>
  }

  export type SeatAssignementUpdateManyWithoutTripNestedInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutTripInput>, Enumerable<SeatAssignementUncheckedCreateWithoutTripInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutTripInput>
    upsert?: Enumerable<SeatAssignementUpsertWithWhereUniqueWithoutTripInput>
    createMany?: SeatAssignementCreateManyTripInputEnvelope
    set?: Enumerable<SeatAssignementWhereUniqueInput>
    disconnect?: Enumerable<SeatAssignementWhereUniqueInput>
    delete?: Enumerable<SeatAssignementWhereUniqueInput>
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
    update?: Enumerable<SeatAssignementUpdateWithWhereUniqueWithoutTripInput>
    updateMany?: Enumerable<SeatAssignementUpdateManyWithWhereWithoutTripInput>
    deleteMany?: Enumerable<SeatAssignementScalarWhereInput>
  }

  export type AdressUpdateOneRequiredWithoutDeparturesNestedInput = {
    create?: XOR<AdressCreateWithoutDeparturesInput, AdressUncheckedCreateWithoutDeparturesInput>
    connectOrCreate?: AdressCreateOrConnectWithoutDeparturesInput
    upsert?: AdressUpsertWithoutDeparturesInput
    connect?: AdressWhereUniqueInput
    update?: XOR<AdressUpdateWithoutDeparturesInput, AdressUncheckedUpdateWithoutDeparturesInput>
  }

  export type AdressUpdateOneRequiredWithoutArrivalsNestedInput = {
    create?: XOR<AdressCreateWithoutArrivalsInput, AdressUncheckedCreateWithoutArrivalsInput>
    connectOrCreate?: AdressCreateOrConnectWithoutArrivalsInput
    upsert?: AdressUpsertWithoutArrivalsInput
    connect?: AdressWhereUniqueInput
    update?: XOR<AdressUpdateWithoutArrivalsInput, AdressUncheckedUpdateWithoutArrivalsInput>
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type VehicleUpdateOneRequiredWithoutTripsNestedInput = {
    create?: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutTripsInput
    upsert?: VehicleUpsertWithoutTripsInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<VehicleUpdateWithoutTripsInput, VehicleUncheckedUpdateWithoutTripsInput>
  }

  export type RealtimeTripDataUpdateManyWithoutTripNestedInput = {
    create?: XOR<Enumerable<RealtimeTripDataCreateWithoutTripInput>, Enumerable<RealtimeTripDataUncheckedCreateWithoutTripInput>>
    connectOrCreate?: Enumerable<RealtimeTripDataCreateOrConnectWithoutTripInput>
    upsert?: Enumerable<RealtimeTripDataUpsertWithWhereUniqueWithoutTripInput>
    createMany?: RealtimeTripDataCreateManyTripInputEnvelope
    set?: Enumerable<RealtimeTripDataWhereUniqueInput>
    disconnect?: Enumerable<RealtimeTripDataWhereUniqueInput>
    delete?: Enumerable<RealtimeTripDataWhereUniqueInput>
    connect?: Enumerable<RealtimeTripDataWhereUniqueInput>
    update?: Enumerable<RealtimeTripDataUpdateWithWhereUniqueWithoutTripInput>
    updateMany?: Enumerable<RealtimeTripDataUpdateManyWithWhereWithoutTripInput>
    deleteMany?: Enumerable<RealtimeTripDataScalarWhereInput>
  }

  export type SeatAssignementUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<Enumerable<SeatAssignementCreateWithoutTripInput>, Enumerable<SeatAssignementUncheckedCreateWithoutTripInput>>
    connectOrCreate?: Enumerable<SeatAssignementCreateOrConnectWithoutTripInput>
    upsert?: Enumerable<SeatAssignementUpsertWithWhereUniqueWithoutTripInput>
    createMany?: SeatAssignementCreateManyTripInputEnvelope
    set?: Enumerable<SeatAssignementWhereUniqueInput>
    disconnect?: Enumerable<SeatAssignementWhereUniqueInput>
    delete?: Enumerable<SeatAssignementWhereUniqueInput>
    connect?: Enumerable<SeatAssignementWhereUniqueInput>
    update?: Enumerable<SeatAssignementUpdateWithWhereUniqueWithoutTripInput>
    updateMany?: Enumerable<SeatAssignementUpdateManyWithWhereWithoutTripInput>
    deleteMany?: Enumerable<SeatAssignementScalarWhereInput>
  }

  export type RealtimeTripDataUncheckedUpdateManyWithoutTripNestedInput = {
    create?: XOR<Enumerable<RealtimeTripDataCreateWithoutTripInput>, Enumerable<RealtimeTripDataUncheckedCreateWithoutTripInput>>
    connectOrCreate?: Enumerable<RealtimeTripDataCreateOrConnectWithoutTripInput>
    upsert?: Enumerable<RealtimeTripDataUpsertWithWhereUniqueWithoutTripInput>
    createMany?: RealtimeTripDataCreateManyTripInputEnvelope
    set?: Enumerable<RealtimeTripDataWhereUniqueInput>
    disconnect?: Enumerable<RealtimeTripDataWhereUniqueInput>
    delete?: Enumerable<RealtimeTripDataWhereUniqueInput>
    connect?: Enumerable<RealtimeTripDataWhereUniqueInput>
    update?: Enumerable<RealtimeTripDataUpdateWithWhereUniqueWithoutTripInput>
    updateMany?: Enumerable<RealtimeTripDataUpdateManyWithWhereWithoutTripInput>
    deleteMany?: Enumerable<RealtimeTripDataScalarWhereInput>
  }

  export type CoordinatesCreateNestedManyWithoutAOIInput = {
    create?: XOR<Enumerable<CoordinatesCreateWithoutAOIInput>, Enumerable<CoordinatesUncheckedCreateWithoutAOIInput>>
    connectOrCreate?: Enumerable<CoordinatesCreateOrConnectWithoutAOIInput>
    connect?: Enumerable<CoordinatesWhereUniqueInput>
  }

  export type CoordinatesUncheckedCreateNestedManyWithoutAOIInput = {
    create?: XOR<Enumerable<CoordinatesCreateWithoutAOIInput>, Enumerable<CoordinatesUncheckedCreateWithoutAOIInput>>
    connectOrCreate?: Enumerable<CoordinatesCreateOrConnectWithoutAOIInput>
    connect?: Enumerable<CoordinatesWhereUniqueInput>
  }

  export type CoordinatesUpdateManyWithoutAOINestedInput = {
    create?: XOR<Enumerable<CoordinatesCreateWithoutAOIInput>, Enumerable<CoordinatesUncheckedCreateWithoutAOIInput>>
    connectOrCreate?: Enumerable<CoordinatesCreateOrConnectWithoutAOIInput>
    upsert?: Enumerable<CoordinatesUpsertWithWhereUniqueWithoutAOIInput>
    set?: Enumerable<CoordinatesWhereUniqueInput>
    disconnect?: Enumerable<CoordinatesWhereUniqueInput>
    delete?: Enumerable<CoordinatesWhereUniqueInput>
    connect?: Enumerable<CoordinatesWhereUniqueInput>
    update?: Enumerable<CoordinatesUpdateWithWhereUniqueWithoutAOIInput>
    updateMany?: Enumerable<CoordinatesUpdateManyWithWhereWithoutAOIInput>
    deleteMany?: Enumerable<CoordinatesScalarWhereInput>
  }

  export type CoordinatesUncheckedUpdateManyWithoutAOINestedInput = {
    create?: XOR<Enumerable<CoordinatesCreateWithoutAOIInput>, Enumerable<CoordinatesUncheckedCreateWithoutAOIInput>>
    connectOrCreate?: Enumerable<CoordinatesCreateOrConnectWithoutAOIInput>
    upsert?: Enumerable<CoordinatesUpsertWithWhereUniqueWithoutAOIInput>
    set?: Enumerable<CoordinatesWhereUniqueInput>
    disconnect?: Enumerable<CoordinatesWhereUniqueInput>
    delete?: Enumerable<CoordinatesWhereUniqueInput>
    connect?: Enumerable<CoordinatesWhereUniqueInput>
    update?: Enumerable<CoordinatesUpdateWithWhereUniqueWithoutAOIInput>
    updateMany?: Enumerable<CoordinatesUpdateManyWithWhereWithoutAOIInput>
    deleteMany?: Enumerable<CoordinatesScalarWhereInput>
  }

  export type TripCreateNestedOneWithoutRealtimeTripDataInput = {
    create?: XOR<TripCreateWithoutRealtimeTripDataInput, TripUncheckedCreateWithoutRealtimeTripDataInput>
    connectOrCreate?: TripCreateOrConnectWithoutRealtimeTripDataInput
    connect?: TripWhereUniqueInput
  }

  export type RealtimeCoordinatesCreateNestedOneWithoutTripDataInput = {
    create?: XOR<RealtimeCoordinatesCreateWithoutTripDataInput, RealtimeCoordinatesUncheckedCreateWithoutTripDataInput>
    connectOrCreate?: RealtimeCoordinatesCreateOrConnectWithoutTripDataInput
    connect?: RealtimeCoordinatesWhereUniqueInput
  }

  export type TripUpdateOneRequiredWithoutRealtimeTripDataNestedInput = {
    create?: XOR<TripCreateWithoutRealtimeTripDataInput, TripUncheckedCreateWithoutRealtimeTripDataInput>
    connectOrCreate?: TripCreateOrConnectWithoutRealtimeTripDataInput
    upsert?: TripUpsertWithoutRealtimeTripDataInput
    connect?: TripWhereUniqueInput
    update?: XOR<TripUpdateWithoutRealtimeTripDataInput, TripUncheckedUpdateWithoutRealtimeTripDataInput>
  }

  export type RealtimeCoordinatesUpdateOneRequiredWithoutTripDataNestedInput = {
    create?: XOR<RealtimeCoordinatesCreateWithoutTripDataInput, RealtimeCoordinatesUncheckedCreateWithoutTripDataInput>
    connectOrCreate?: RealtimeCoordinatesCreateOrConnectWithoutTripDataInput
    upsert?: RealtimeCoordinatesUpsertWithoutTripDataInput
    connect?: RealtimeCoordinatesWhereUniqueInput
    update?: XOR<RealtimeCoordinatesUpdateWithoutTripDataInput, RealtimeCoordinatesUncheckedUpdateWithoutTripDataInput>
  }

  export type RealtimeTripDataCreateNestedManyWithoutCoordinatesInput = {
    create?: XOR<Enumerable<RealtimeTripDataCreateWithoutCoordinatesInput>, Enumerable<RealtimeTripDataUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<RealtimeTripDataCreateOrConnectWithoutCoordinatesInput>
    createMany?: RealtimeTripDataCreateManyCoordinatesInputEnvelope
    connect?: Enumerable<RealtimeTripDataWhereUniqueInput>
  }

  export type RealtimeTripDataUncheckedCreateNestedManyWithoutCoordinatesInput = {
    create?: XOR<Enumerable<RealtimeTripDataCreateWithoutCoordinatesInput>, Enumerable<RealtimeTripDataUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<RealtimeTripDataCreateOrConnectWithoutCoordinatesInput>
    createMany?: RealtimeTripDataCreateManyCoordinatesInputEnvelope
    connect?: Enumerable<RealtimeTripDataWhereUniqueInput>
  }

  export type RealtimeTripDataUpdateManyWithoutCoordinatesNestedInput = {
    create?: XOR<Enumerable<RealtimeTripDataCreateWithoutCoordinatesInput>, Enumerable<RealtimeTripDataUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<RealtimeTripDataCreateOrConnectWithoutCoordinatesInput>
    upsert?: Enumerable<RealtimeTripDataUpsertWithWhereUniqueWithoutCoordinatesInput>
    createMany?: RealtimeTripDataCreateManyCoordinatesInputEnvelope
    set?: Enumerable<RealtimeTripDataWhereUniqueInput>
    disconnect?: Enumerable<RealtimeTripDataWhereUniqueInput>
    delete?: Enumerable<RealtimeTripDataWhereUniqueInput>
    connect?: Enumerable<RealtimeTripDataWhereUniqueInput>
    update?: Enumerable<RealtimeTripDataUpdateWithWhereUniqueWithoutCoordinatesInput>
    updateMany?: Enumerable<RealtimeTripDataUpdateManyWithWhereWithoutCoordinatesInput>
    deleteMany?: Enumerable<RealtimeTripDataScalarWhereInput>
  }

  export type RealtimeTripDataUncheckedUpdateManyWithoutCoordinatesNestedInput = {
    create?: XOR<Enumerable<RealtimeTripDataCreateWithoutCoordinatesInput>, Enumerable<RealtimeTripDataUncheckedCreateWithoutCoordinatesInput>>
    connectOrCreate?: Enumerable<RealtimeTripDataCreateOrConnectWithoutCoordinatesInput>
    upsert?: Enumerable<RealtimeTripDataUpsertWithWhereUniqueWithoutCoordinatesInput>
    createMany?: RealtimeTripDataCreateManyCoordinatesInputEnvelope
    set?: Enumerable<RealtimeTripDataWhereUniqueInput>
    disconnect?: Enumerable<RealtimeTripDataWhereUniqueInput>
    delete?: Enumerable<RealtimeTripDataWhereUniqueInput>
    connect?: Enumerable<RealtimeTripDataWhereUniqueInput>
    update?: Enumerable<RealtimeTripDataUpdateWithWhereUniqueWithoutCoordinatesInput>
    updateMany?: Enumerable<RealtimeTripDataUpdateManyWithWhereWithoutCoordinatesInput>
    deleteMany?: Enumerable<RealtimeTripDataScalarWhereInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedFloatNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedFloatNullableFilter
    _min?: NestedFloatNullableFilter
    _max?: NestedFloatNullableFilter
  }

  export type TripCreateWithoutDriverInput = {
    id?: string
    seatAssignments?: SeatAssignementCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddress: AdressCreateNestedOneWithoutDeparturesInput
    endAddress: AdressCreateNestedOneWithoutArrivalsInput
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    Vehicle: VehicleCreateNestedOneWithoutTripsInput
    description?: string | null
    realtimeTripData?: RealtimeTripDataCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutDriverInput = {
    id?: string
    seatAssignments?: SeatAssignementUncheckedCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddressId: string
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    vehicleId: string
    description?: string | null
    realtimeTripData?: RealtimeTripDataUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutDriverInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripCreateManyDriverInputEnvelope = {
    data: Enumerable<TripCreateManyDriverInput>
    skipDuplicates?: boolean
  }

  export type VehicleCreateWithoutDriverInput = {
    id?: string
    model: VehicleModelCreateNestedOneWithoutVehiclesInput
    licensePlate: string
    trips?: TripCreateNestedManyWithoutVehicleInput
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VehicleUncheckedCreateWithoutDriverInput = {
    id?: string
    modelId: number
    licensePlate: string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VehicleCreateOrConnectWithoutDriverInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
  }

  export type VehicleCreateManyDriverInputEnvelope = {
    data: Enumerable<VehicleCreateManyDriverInput>
    skipDuplicates?: boolean
  }

  export type SeatAssignementCreateWithoutPassengerInput = {
    id?: string
    pickupAddress: AdressCreateNestedOneWithoutPickUpsInput
    dropoffAddress: AdressCreateNestedOneWithoutDropOffsInput
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    trip: TripCreateNestedOneWithoutSeatAssignmentsInput
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementUncheckedCreateWithoutPassengerInput = {
    id?: string
    pickupAdressId: string
    dropoffAdressId: string
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    tripId: string
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementCreateOrConnectWithoutPassengerInput = {
    where: SeatAssignementWhereUniqueInput
    create: XOR<SeatAssignementCreateWithoutPassengerInput, SeatAssignementUncheckedCreateWithoutPassengerInput>
  }

  export type SeatAssignementCreateManyPassengerInputEnvelope = {
    data: Enumerable<SeatAssignementCreateManyPassengerInput>
    skipDuplicates?: boolean
  }

  export type TripUpsertWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
    create: XOR<TripCreateWithoutDriverInput, TripUncheckedCreateWithoutDriverInput>
  }

  export type TripUpdateWithWhereUniqueWithoutDriverInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutDriverInput, TripUncheckedUpdateWithoutDriverInput>
  }

  export type TripUpdateManyWithWhereWithoutDriverInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutTripsDrivenInput>
  }

  export type TripScalarWhereInput = {
    AND?: Enumerable<TripScalarWhereInput>
    OR?: Enumerable<TripScalarWhereInput>
    NOT?: Enumerable<TripScalarWhereInput>
    id?: StringFilter | string
    driverId?: StringFilter | string
    status?: StringFilter | string
    price?: FloatFilter | number
    rating?: IntNullableFilter | number | null
    message?: StringNullableFilter | string | null
    startAddressId?: StringFilter | string
    endAddressId?: StringFilter | string
    maxPassengers?: IntFilter | number
    estimatedStartTime?: DateTimeFilter | Date | string
    estimatedArrivalTime?: DateTimeFilter | Date | string
    actualDepartureTime?: DateTimeNullableFilter | Date | string | null
    actualArrivalTime?: DateTimeNullableFilter | Date | string | null
    actualDistance?: FloatNullableFilter | number | null
    vehicleId?: StringFilter | string
    description?: StringNullableFilter | string | null
  }

  export type VehicleUpsertWithWhereUniqueWithoutDriverInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutDriverInput, VehicleUncheckedUpdateWithoutDriverInput>
    create: XOR<VehicleCreateWithoutDriverInput, VehicleUncheckedCreateWithoutDriverInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutDriverInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutDriverInput, VehicleUncheckedUpdateWithoutDriverInput>
  }

  export type VehicleUpdateManyWithWhereWithoutDriverInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutVehicleInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: Enumerable<VehicleScalarWhereInput>
    OR?: Enumerable<VehicleScalarWhereInput>
    NOT?: Enumerable<VehicleScalarWhereInput>
    id?: StringFilter | string
    modelId?: IntFilter | number
    licensePlate?: StringFilter | string
    driverId?: StringFilter | string
    maxPassengers?: IntFilter | number
    createAt?: DateTimeFilter | Date | string
    updateAt?: DateTimeFilter | Date | string
  }

  export type SeatAssignementUpsertWithWhereUniqueWithoutPassengerInput = {
    where: SeatAssignementWhereUniqueInput
    update: XOR<SeatAssignementUpdateWithoutPassengerInput, SeatAssignementUncheckedUpdateWithoutPassengerInput>
    create: XOR<SeatAssignementCreateWithoutPassengerInput, SeatAssignementUncheckedCreateWithoutPassengerInput>
  }

  export type SeatAssignementUpdateWithWhereUniqueWithoutPassengerInput = {
    where: SeatAssignementWhereUniqueInput
    data: XOR<SeatAssignementUpdateWithoutPassengerInput, SeatAssignementUncheckedUpdateWithoutPassengerInput>
  }

  export type SeatAssignementUpdateManyWithWhereWithoutPassengerInput = {
    where: SeatAssignementScalarWhereInput
    data: XOR<SeatAssignementUpdateManyMutationInput, SeatAssignementUncheckedUpdateManyWithoutTripsTakenInput>
  }

  export type SeatAssignementScalarWhereInput = {
    AND?: Enumerable<SeatAssignementScalarWhereInput>
    OR?: Enumerable<SeatAssignementScalarWhereInput>
    NOT?: Enumerable<SeatAssignementScalarWhereInput>
    id?: StringFilter | string
    pickupAdressId?: StringFilter | string
    dropoffAdressId?: StringFilter | string
    status?: StringFilter | string
    qrCode?: StringFilter | string
    userRating?: IntNullableFilter | number | null
    message?: StringNullableFilter | string | null
    tripId?: StringFilter | string
    passengerId?: StringFilter | string
    pickupType?: StringNullableFilter | string | null
    dropoffType?: StringNullableFilter | string | null
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: Enumerable<AccountCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    type?: StringFilter | string
    provider?: StringFilter | string
    providerAccountId?: StringFilter | string
    refresh_token?: StringNullableFilter | string | null
    access_token?: StringNullableFilter | string | null
    expires_at?: IntNullableFilter | number | null
    token_type?: StringNullableFilter | string | null
    scope?: StringNullableFilter | string | null
    id_token?: StringNullableFilter | string | null
    session_state?: StringNullableFilter | string | null
    ext_expires_in?: IntNullableFilter | number | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    sessionToken?: StringFilter | string
    userId?: StringFilter | string
    expires?: DateTimeFilter | Date | string
  }

  export type VehicleModelCreateWithoutVehiclesInput = {
    model: string
    make: VehicleMakeCreateNestedOneWithoutModelsInput
    type: VehicleTypeCreateNestedOneWithoutModelsInput
  }

  export type VehicleModelUncheckedCreateWithoutVehiclesInput = {
    id?: number
    model: string
    makeId: number
    typeId: number
  }

  export type VehicleModelCreateOrConnectWithoutVehiclesInput = {
    where: VehicleModelWhereUniqueInput
    create: XOR<VehicleModelCreateWithoutVehiclesInput, VehicleModelUncheckedCreateWithoutVehiclesInput>
  }

  export type MobileUserCreateWithoutVehicleInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    lastLogin?: Date | string
    legajoUCA?: string | null
    birthDate?: Date | string | null
    sex?: string | null
    phone?: string | null
    isDriver?: boolean
    completedSurvey?: boolean
    TripsDriven?: TripCreateNestedManyWithoutDriverInput
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    TripsTaken?: SeatAssignementCreateNestedManyWithoutPassengerInput
  }

  export type MobileUserUncheckedCreateWithoutVehicleInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    lastLogin?: Date | string
    legajoUCA?: string | null
    birthDate?: Date | string | null
    sex?: string | null
    phone?: string | null
    isDriver?: boolean
    completedSurvey?: boolean
    TripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    TripsTaken?: SeatAssignementUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type MobileUserCreateOrConnectWithoutVehicleInput = {
    where: MobileUserWhereUniqueInput
    create: XOR<MobileUserCreateWithoutVehicleInput, MobileUserUncheckedCreateWithoutVehicleInput>
  }

  export type TripCreateWithoutVehicleInput = {
    id?: string
    driver: MobileUserCreateNestedOneWithoutTripsDrivenInput
    seatAssignments?: SeatAssignementCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddress: AdressCreateNestedOneWithoutDeparturesInput
    endAddress: AdressCreateNestedOneWithoutArrivalsInput
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    description?: string | null
    realtimeTripData?: RealtimeTripDataCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutVehicleInput = {
    id?: string
    driverId: string
    seatAssignments?: SeatAssignementUncheckedCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddressId: string
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    description?: string | null
    realtimeTripData?: RealtimeTripDataUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutVehicleInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput>
  }

  export type TripCreateManyVehicleInputEnvelope = {
    data: Enumerable<TripCreateManyVehicleInput>
    skipDuplicates?: boolean
  }

  export type VehicleModelUpsertWithoutVehiclesInput = {
    update: XOR<VehicleModelUpdateWithoutVehiclesInput, VehicleModelUncheckedUpdateWithoutVehiclesInput>
    create: XOR<VehicleModelCreateWithoutVehiclesInput, VehicleModelUncheckedCreateWithoutVehiclesInput>
  }

  export type VehicleModelUpdateWithoutVehiclesInput = {
    model?: StringFieldUpdateOperationsInput | string
    make?: VehicleMakeUpdateOneRequiredWithoutModelsNestedInput
    type?: VehicleTypeUpdateOneRequiredWithoutModelsNestedInput
  }

  export type VehicleModelUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    makeId?: IntFieldUpdateOperationsInput | number
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type MobileUserUpsertWithoutVehicleInput = {
    update: XOR<MobileUserUpdateWithoutVehicleInput, MobileUserUncheckedUpdateWithoutVehicleInput>
    create: XOR<MobileUserCreateWithoutVehicleInput, MobileUserUncheckedCreateWithoutVehicleInput>
  }

  export type MobileUserUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoUCA?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDriver?: BoolFieldUpdateOperationsInput | boolean
    completedSurvey?: BoolFieldUpdateOperationsInput | boolean
    TripsDriven?: TripUpdateManyWithoutDriverNestedInput
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TripsTaken?: SeatAssignementUpdateManyWithoutPassengerNestedInput
  }

  export type MobileUserUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoUCA?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDriver?: BoolFieldUpdateOperationsInput | boolean
    completedSurvey?: BoolFieldUpdateOperationsInput | boolean
    TripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TripsTaken?: SeatAssignementUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type TripUpsertWithWhereUniqueWithoutVehicleInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutVehicleInput, TripUncheckedUpdateWithoutVehicleInput>
    create: XOR<TripCreateWithoutVehicleInput, TripUncheckedCreateWithoutVehicleInput>
  }

  export type TripUpdateWithWhereUniqueWithoutVehicleInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutVehicleInput, TripUncheckedUpdateWithoutVehicleInput>
  }

  export type TripUpdateManyWithWhereWithoutVehicleInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutTripsInput>
  }

  export type VehicleModelCreateWithoutMakeInput = {
    model: string
    vehicles?: VehicleCreateNestedManyWithoutModelInput
    type: VehicleTypeCreateNestedOneWithoutModelsInput
  }

  export type VehicleModelUncheckedCreateWithoutMakeInput = {
    id?: number
    model: string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutModelInput
    typeId: number
  }

  export type VehicleModelCreateOrConnectWithoutMakeInput = {
    where: VehicleModelWhereUniqueInput
    create: XOR<VehicleModelCreateWithoutMakeInput, VehicleModelUncheckedCreateWithoutMakeInput>
  }

  export type VehicleModelCreateManyMakeInputEnvelope = {
    data: Enumerable<VehicleModelCreateManyMakeInput>
    skipDuplicates?: boolean
  }

  export type VehicleModelUpsertWithWhereUniqueWithoutMakeInput = {
    where: VehicleModelWhereUniqueInput
    update: XOR<VehicleModelUpdateWithoutMakeInput, VehicleModelUncheckedUpdateWithoutMakeInput>
    create: XOR<VehicleModelCreateWithoutMakeInput, VehicleModelUncheckedCreateWithoutMakeInput>
  }

  export type VehicleModelUpdateWithWhereUniqueWithoutMakeInput = {
    where: VehicleModelWhereUniqueInput
    data: XOR<VehicleModelUpdateWithoutMakeInput, VehicleModelUncheckedUpdateWithoutMakeInput>
  }

  export type VehicleModelUpdateManyWithWhereWithoutMakeInput = {
    where: VehicleModelScalarWhereInput
    data: XOR<VehicleModelUpdateManyMutationInput, VehicleModelUncheckedUpdateManyWithoutModelsInput>
  }

  export type VehicleModelScalarWhereInput = {
    AND?: Enumerable<VehicleModelScalarWhereInput>
    OR?: Enumerable<VehicleModelScalarWhereInput>
    NOT?: Enumerable<VehicleModelScalarWhereInput>
    id?: IntFilter | number
    model?: StringFilter | string
    makeId?: IntFilter | number
    typeId?: IntFilter | number
  }

  export type VehicleModelCreateWithoutTypeInput = {
    model: string
    make: VehicleMakeCreateNestedOneWithoutModelsInput
    vehicles?: VehicleCreateNestedManyWithoutModelInput
  }

  export type VehicleModelUncheckedCreateWithoutTypeInput = {
    id?: number
    model: string
    makeId: number
    vehicles?: VehicleUncheckedCreateNestedManyWithoutModelInput
  }

  export type VehicleModelCreateOrConnectWithoutTypeInput = {
    where: VehicleModelWhereUniqueInput
    create: XOR<VehicleModelCreateWithoutTypeInput, VehicleModelUncheckedCreateWithoutTypeInput>
  }

  export type VehicleModelCreateManyTypeInputEnvelope = {
    data: Enumerable<VehicleModelCreateManyTypeInput>
    skipDuplicates?: boolean
  }

  export type VehicleModelUpsertWithWhereUniqueWithoutTypeInput = {
    where: VehicleModelWhereUniqueInput
    update: XOR<VehicleModelUpdateWithoutTypeInput, VehicleModelUncheckedUpdateWithoutTypeInput>
    create: XOR<VehicleModelCreateWithoutTypeInput, VehicleModelUncheckedCreateWithoutTypeInput>
  }

  export type VehicleModelUpdateWithWhereUniqueWithoutTypeInput = {
    where: VehicleModelWhereUniqueInput
    data: XOR<VehicleModelUpdateWithoutTypeInput, VehicleModelUncheckedUpdateWithoutTypeInput>
  }

  export type VehicleModelUpdateManyWithWhereWithoutTypeInput = {
    where: VehicleModelScalarWhereInput
    data: XOR<VehicleModelUpdateManyMutationInput, VehicleModelUncheckedUpdateManyWithoutModelsInput>
  }

  export type VehicleMakeCreateWithoutModelsInput = {
    make: string
  }

  export type VehicleMakeUncheckedCreateWithoutModelsInput = {
    id?: number
    make: string
  }

  export type VehicleMakeCreateOrConnectWithoutModelsInput = {
    where: VehicleMakeWhereUniqueInput
    create: XOR<VehicleMakeCreateWithoutModelsInput, VehicleMakeUncheckedCreateWithoutModelsInput>
  }

  export type VehicleCreateWithoutModelInput = {
    id?: string
    licensePlate: string
    driver: MobileUserCreateNestedOneWithoutVehicleInput
    trips?: TripCreateNestedManyWithoutVehicleInput
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VehicleUncheckedCreateWithoutModelInput = {
    id?: string
    licensePlate: string
    driverId: string
    trips?: TripUncheckedCreateNestedManyWithoutVehicleInput
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VehicleCreateOrConnectWithoutModelInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutModelInput, VehicleUncheckedCreateWithoutModelInput>
  }

  export type VehicleCreateManyModelInputEnvelope = {
    data: Enumerable<VehicleCreateManyModelInput>
    skipDuplicates?: boolean
  }

  export type VehicleTypeCreateWithoutModelsInput = {
    type: string
  }

  export type VehicleTypeUncheckedCreateWithoutModelsInput = {
    id?: number
    type: string
  }

  export type VehicleTypeCreateOrConnectWithoutModelsInput = {
    where: VehicleTypeWhereUniqueInput
    create: XOR<VehicleTypeCreateWithoutModelsInput, VehicleTypeUncheckedCreateWithoutModelsInput>
  }

  export type VehicleMakeUpsertWithoutModelsInput = {
    update: XOR<VehicleMakeUpdateWithoutModelsInput, VehicleMakeUncheckedUpdateWithoutModelsInput>
    create: XOR<VehicleMakeCreateWithoutModelsInput, VehicleMakeUncheckedCreateWithoutModelsInput>
  }

  export type VehicleMakeUpdateWithoutModelsInput = {
    make?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleMakeUncheckedUpdateWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    make?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleUpsertWithWhereUniqueWithoutModelInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutModelInput, VehicleUncheckedUpdateWithoutModelInput>
    create: XOR<VehicleCreateWithoutModelInput, VehicleUncheckedCreateWithoutModelInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutModelInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutModelInput, VehicleUncheckedUpdateWithoutModelInput>
  }

  export type VehicleUpdateManyWithWhereWithoutModelInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutVehiclesInput>
  }

  export type VehicleTypeUpsertWithoutModelsInput = {
    update: XOR<VehicleTypeUpdateWithoutModelsInput, VehicleTypeUncheckedUpdateWithoutModelsInput>
    create: XOR<VehicleTypeCreateWithoutModelsInput, VehicleTypeUncheckedCreateWithoutModelsInput>
  }

  export type VehicleTypeUpdateWithoutModelsInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type VehicleTypeUncheckedUpdateWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CoordinatesCreateWithoutMilestoneInput = {
    lat: number
    lng: number
    timestamp: Date | string
    Adress?: AdressCreateNestedManyWithoutCoordinatesInput
    AOI?: AOICreateNestedManyWithoutCoordinatesInput
  }

  export type CoordinatesUncheckedCreateWithoutMilestoneInput = {
    id?: number
    lat: number
    lng: number
    timestamp: Date | string
    Adress?: AdressUncheckedCreateNestedManyWithoutCoordinatesInput
    AOI?: AOIUncheckedCreateNestedManyWithoutCoordinatesInput
  }

  export type CoordinatesCreateOrConnectWithoutMilestoneInput = {
    where: CoordinatesWhereUniqueInput
    create: XOR<CoordinatesCreateWithoutMilestoneInput, CoordinatesUncheckedCreateWithoutMilestoneInput>
  }

  export type CoordinatesUpsertWithoutMilestoneInput = {
    update: XOR<CoordinatesUpdateWithoutMilestoneInput, CoordinatesUncheckedUpdateWithoutMilestoneInput>
    create: XOR<CoordinatesCreateWithoutMilestoneInput, CoordinatesUncheckedCreateWithoutMilestoneInput>
  }

  export type CoordinatesUpdateWithoutMilestoneInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Adress?: AdressUpdateManyWithoutCoordinatesNestedInput
    AOI?: AOIUpdateManyWithoutCoordinatesNestedInput
  }

  export type CoordinatesUncheckedUpdateWithoutMilestoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    Adress?: AdressUncheckedUpdateManyWithoutCoordinatesNestedInput
    AOI?: AOIUncheckedUpdateManyWithoutCoordinatesNestedInput
  }

  export type MilestoneCreateWithoutCoordiantesInput = {
    friendlyName: string
  }

  export type MilestoneUncheckedCreateWithoutCoordiantesInput = {
    id?: number
    friendlyName: string
  }

  export type MilestoneCreateOrConnectWithoutCoordiantesInput = {
    where: MilestoneWhereUniqueInput
    create: XOR<MilestoneCreateWithoutCoordiantesInput, MilestoneUncheckedCreateWithoutCoordiantesInput>
  }

  export type MilestoneCreateManyCoordiantesInputEnvelope = {
    data: Enumerable<MilestoneCreateManyCoordiantesInput>
    skipDuplicates?: boolean
  }

  export type AdressCreateWithoutCoordinatesInput = {
    id?: string
    name: string
    PickUps?: SeatAssignementCreateNestedManyWithoutPickupAddressInput
    DropOffs?: SeatAssignementCreateNestedManyWithoutDropoffAddressInput
    Departures?: TripCreateNestedManyWithoutStartAddressInput
    Arrivals?: TripCreateNestedManyWithoutEndAddressInput
  }

  export type AdressUncheckedCreateWithoutCoordinatesInput = {
    id?: string
    name: string
    PickUps?: SeatAssignementUncheckedCreateNestedManyWithoutPickupAddressInput
    DropOffs?: SeatAssignementUncheckedCreateNestedManyWithoutDropoffAddressInput
    Departures?: TripUncheckedCreateNestedManyWithoutStartAddressInput
    Arrivals?: TripUncheckedCreateNestedManyWithoutEndAddressInput
  }

  export type AdressCreateOrConnectWithoutCoordinatesInput = {
    where: AdressWhereUniqueInput
    create: XOR<AdressCreateWithoutCoordinatesInput, AdressUncheckedCreateWithoutCoordinatesInput>
  }

  export type AdressCreateManyCoordinatesInputEnvelope = {
    data: Enumerable<AdressCreateManyCoordinatesInput>
    skipDuplicates?: boolean
  }

  export type AOICreateWithoutCoordinatesInput = {
    id?: string
    name: string
  }

  export type AOIUncheckedCreateWithoutCoordinatesInput = {
    id?: string
    name: string
  }

  export type AOICreateOrConnectWithoutCoordinatesInput = {
    where: AOIWhereUniqueInput
    create: XOR<AOICreateWithoutCoordinatesInput, AOIUncheckedCreateWithoutCoordinatesInput>
  }

  export type MilestoneUpsertWithWhereUniqueWithoutCoordiantesInput = {
    where: MilestoneWhereUniqueInput
    update: XOR<MilestoneUpdateWithoutCoordiantesInput, MilestoneUncheckedUpdateWithoutCoordiantesInput>
    create: XOR<MilestoneCreateWithoutCoordiantesInput, MilestoneUncheckedCreateWithoutCoordiantesInput>
  }

  export type MilestoneUpdateWithWhereUniqueWithoutCoordiantesInput = {
    where: MilestoneWhereUniqueInput
    data: XOR<MilestoneUpdateWithoutCoordiantesInput, MilestoneUncheckedUpdateWithoutCoordiantesInput>
  }

  export type MilestoneUpdateManyWithWhereWithoutCoordiantesInput = {
    where: MilestoneScalarWhereInput
    data: XOR<MilestoneUpdateManyMutationInput, MilestoneUncheckedUpdateManyWithoutMilestoneInput>
  }

  export type MilestoneScalarWhereInput = {
    AND?: Enumerable<MilestoneScalarWhereInput>
    OR?: Enumerable<MilestoneScalarWhereInput>
    NOT?: Enumerable<MilestoneScalarWhereInput>
    id?: IntFilter | number
    friendlyName?: StringFilter | string
    coordinatesId?: IntNullableFilter | number | null
  }

  export type AdressUpsertWithWhereUniqueWithoutCoordinatesInput = {
    where: AdressWhereUniqueInput
    update: XOR<AdressUpdateWithoutCoordinatesInput, AdressUncheckedUpdateWithoutCoordinatesInput>
    create: XOR<AdressCreateWithoutCoordinatesInput, AdressUncheckedCreateWithoutCoordinatesInput>
  }

  export type AdressUpdateWithWhereUniqueWithoutCoordinatesInput = {
    where: AdressWhereUniqueInput
    data: XOR<AdressUpdateWithoutCoordinatesInput, AdressUncheckedUpdateWithoutCoordinatesInput>
  }

  export type AdressUpdateManyWithWhereWithoutCoordinatesInput = {
    where: AdressScalarWhereInput
    data: XOR<AdressUpdateManyMutationInput, AdressUncheckedUpdateManyWithoutAdressInput>
  }

  export type AdressScalarWhereInput = {
    AND?: Enumerable<AdressScalarWhereInput>
    OR?: Enumerable<AdressScalarWhereInput>
    NOT?: Enumerable<AdressScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    coordinatesId?: IntFilter | number
  }

  export type AOIUpsertWithWhereUniqueWithoutCoordinatesInput = {
    where: AOIWhereUniqueInput
    update: XOR<AOIUpdateWithoutCoordinatesInput, AOIUncheckedUpdateWithoutCoordinatesInput>
    create: XOR<AOICreateWithoutCoordinatesInput, AOIUncheckedCreateWithoutCoordinatesInput>
  }

  export type AOIUpdateWithWhereUniqueWithoutCoordinatesInput = {
    where: AOIWhereUniqueInput
    data: XOR<AOIUpdateWithoutCoordinatesInput, AOIUncheckedUpdateWithoutCoordinatesInput>
  }

  export type AOIUpdateManyWithWhereWithoutCoordinatesInput = {
    where: AOIScalarWhereInput
    data: XOR<AOIUpdateManyMutationInput, AOIUncheckedUpdateManyWithoutAOIInput>
  }

  export type AOIScalarWhereInput = {
    AND?: Enumerable<AOIScalarWhereInput>
    OR?: Enumerable<AOIScalarWhereInput>
    NOT?: Enumerable<AOIScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
  }

  export type CoordinatesCreateWithoutAdressInput = {
    lat: number
    lng: number
    timestamp: Date | string
    milestone?: MilestoneCreateNestedManyWithoutCoordiantesInput
    AOI?: AOICreateNestedManyWithoutCoordinatesInput
  }

  export type CoordinatesUncheckedCreateWithoutAdressInput = {
    id?: number
    lat: number
    lng: number
    timestamp: Date | string
    milestone?: MilestoneUncheckedCreateNestedManyWithoutCoordiantesInput
    AOI?: AOIUncheckedCreateNestedManyWithoutCoordinatesInput
  }

  export type CoordinatesCreateOrConnectWithoutAdressInput = {
    where: CoordinatesWhereUniqueInput
    create: XOR<CoordinatesCreateWithoutAdressInput, CoordinatesUncheckedCreateWithoutAdressInput>
  }

  export type SeatAssignementCreateWithoutPickupAddressInput = {
    id?: string
    dropoffAddress: AdressCreateNestedOneWithoutDropOffsInput
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    trip: TripCreateNestedOneWithoutSeatAssignmentsInput
    passenger: MobileUserCreateNestedOneWithoutTripsTakenInput
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementUncheckedCreateWithoutPickupAddressInput = {
    id?: string
    dropoffAdressId: string
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    tripId: string
    passengerId: string
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementCreateOrConnectWithoutPickupAddressInput = {
    where: SeatAssignementWhereUniqueInput
    create: XOR<SeatAssignementCreateWithoutPickupAddressInput, SeatAssignementUncheckedCreateWithoutPickupAddressInput>
  }

  export type SeatAssignementCreateManyPickupAddressInputEnvelope = {
    data: Enumerable<SeatAssignementCreateManyPickupAddressInput>
    skipDuplicates?: boolean
  }

  export type SeatAssignementCreateWithoutDropoffAddressInput = {
    id?: string
    pickupAddress: AdressCreateNestedOneWithoutPickUpsInput
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    trip: TripCreateNestedOneWithoutSeatAssignmentsInput
    passenger: MobileUserCreateNestedOneWithoutTripsTakenInput
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementUncheckedCreateWithoutDropoffAddressInput = {
    id?: string
    pickupAdressId: string
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    tripId: string
    passengerId: string
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementCreateOrConnectWithoutDropoffAddressInput = {
    where: SeatAssignementWhereUniqueInput
    create: XOR<SeatAssignementCreateWithoutDropoffAddressInput, SeatAssignementUncheckedCreateWithoutDropoffAddressInput>
  }

  export type SeatAssignementCreateManyDropoffAddressInputEnvelope = {
    data: Enumerable<SeatAssignementCreateManyDropoffAddressInput>
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutStartAddressInput = {
    id?: string
    driver: MobileUserCreateNestedOneWithoutTripsDrivenInput
    seatAssignments?: SeatAssignementCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    endAddress: AdressCreateNestedOneWithoutArrivalsInput
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    Vehicle: VehicleCreateNestedOneWithoutTripsInput
    description?: string | null
    realtimeTripData?: RealtimeTripDataCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutStartAddressInput = {
    id?: string
    driverId: string
    seatAssignments?: SeatAssignementUncheckedCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    vehicleId: string
    description?: string | null
    realtimeTripData?: RealtimeTripDataUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutStartAddressInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutStartAddressInput, TripUncheckedCreateWithoutStartAddressInput>
  }

  export type TripCreateManyStartAddressInputEnvelope = {
    data: Enumerable<TripCreateManyStartAddressInput>
    skipDuplicates?: boolean
  }

  export type TripCreateWithoutEndAddressInput = {
    id?: string
    driver: MobileUserCreateNestedOneWithoutTripsDrivenInput
    seatAssignments?: SeatAssignementCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddress: AdressCreateNestedOneWithoutDeparturesInput
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    Vehicle: VehicleCreateNestedOneWithoutTripsInput
    description?: string | null
    realtimeTripData?: RealtimeTripDataCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutEndAddressInput = {
    id?: string
    driverId: string
    seatAssignments?: SeatAssignementUncheckedCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    vehicleId: string
    description?: string | null
    realtimeTripData?: RealtimeTripDataUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutEndAddressInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutEndAddressInput, TripUncheckedCreateWithoutEndAddressInput>
  }

  export type TripCreateManyEndAddressInputEnvelope = {
    data: Enumerable<TripCreateManyEndAddressInput>
    skipDuplicates?: boolean
  }

  export type CoordinatesUpsertWithoutAdressInput = {
    update: XOR<CoordinatesUpdateWithoutAdressInput, CoordinatesUncheckedUpdateWithoutAdressInput>
    create: XOR<CoordinatesCreateWithoutAdressInput, CoordinatesUncheckedCreateWithoutAdressInput>
  }

  export type CoordinatesUpdateWithoutAdressInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUpdateManyWithoutCoordiantesNestedInput
    AOI?: AOIUpdateManyWithoutCoordinatesNestedInput
  }

  export type CoordinatesUncheckedUpdateWithoutAdressInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUncheckedUpdateManyWithoutCoordiantesNestedInput
    AOI?: AOIUncheckedUpdateManyWithoutCoordinatesNestedInput
  }

  export type SeatAssignementUpsertWithWhereUniqueWithoutPickupAddressInput = {
    where: SeatAssignementWhereUniqueInput
    update: XOR<SeatAssignementUpdateWithoutPickupAddressInput, SeatAssignementUncheckedUpdateWithoutPickupAddressInput>
    create: XOR<SeatAssignementCreateWithoutPickupAddressInput, SeatAssignementUncheckedCreateWithoutPickupAddressInput>
  }

  export type SeatAssignementUpdateWithWhereUniqueWithoutPickupAddressInput = {
    where: SeatAssignementWhereUniqueInput
    data: XOR<SeatAssignementUpdateWithoutPickupAddressInput, SeatAssignementUncheckedUpdateWithoutPickupAddressInput>
  }

  export type SeatAssignementUpdateManyWithWhereWithoutPickupAddressInput = {
    where: SeatAssignementScalarWhereInput
    data: XOR<SeatAssignementUpdateManyMutationInput, SeatAssignementUncheckedUpdateManyWithoutPickUpsInput>
  }

  export type SeatAssignementUpsertWithWhereUniqueWithoutDropoffAddressInput = {
    where: SeatAssignementWhereUniqueInput
    update: XOR<SeatAssignementUpdateWithoutDropoffAddressInput, SeatAssignementUncheckedUpdateWithoutDropoffAddressInput>
    create: XOR<SeatAssignementCreateWithoutDropoffAddressInput, SeatAssignementUncheckedCreateWithoutDropoffAddressInput>
  }

  export type SeatAssignementUpdateWithWhereUniqueWithoutDropoffAddressInput = {
    where: SeatAssignementWhereUniqueInput
    data: XOR<SeatAssignementUpdateWithoutDropoffAddressInput, SeatAssignementUncheckedUpdateWithoutDropoffAddressInput>
  }

  export type SeatAssignementUpdateManyWithWhereWithoutDropoffAddressInput = {
    where: SeatAssignementScalarWhereInput
    data: XOR<SeatAssignementUpdateManyMutationInput, SeatAssignementUncheckedUpdateManyWithoutDropOffsInput>
  }

  export type TripUpsertWithWhereUniqueWithoutStartAddressInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutStartAddressInput, TripUncheckedUpdateWithoutStartAddressInput>
    create: XOR<TripCreateWithoutStartAddressInput, TripUncheckedCreateWithoutStartAddressInput>
  }

  export type TripUpdateWithWhereUniqueWithoutStartAddressInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutStartAddressInput, TripUncheckedUpdateWithoutStartAddressInput>
  }

  export type TripUpdateManyWithWhereWithoutStartAddressInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutDeparturesInput>
  }

  export type TripUpsertWithWhereUniqueWithoutEndAddressInput = {
    where: TripWhereUniqueInput
    update: XOR<TripUpdateWithoutEndAddressInput, TripUncheckedUpdateWithoutEndAddressInput>
    create: XOR<TripCreateWithoutEndAddressInput, TripUncheckedCreateWithoutEndAddressInput>
  }

  export type TripUpdateWithWhereUniqueWithoutEndAddressInput = {
    where: TripWhereUniqueInput
    data: XOR<TripUpdateWithoutEndAddressInput, TripUncheckedUpdateWithoutEndAddressInput>
  }

  export type TripUpdateManyWithWhereWithoutEndAddressInput = {
    where: TripScalarWhereInput
    data: XOR<TripUpdateManyMutationInput, TripUncheckedUpdateManyWithoutArrivalsInput>
  }

  export type AdressCreateWithoutPickUpsInput = {
    id?: string
    name: string
    coordinates: CoordinatesCreateNestedOneWithoutAdressInput
    DropOffs?: SeatAssignementCreateNestedManyWithoutDropoffAddressInput
    Departures?: TripCreateNestedManyWithoutStartAddressInput
    Arrivals?: TripCreateNestedManyWithoutEndAddressInput
  }

  export type AdressUncheckedCreateWithoutPickUpsInput = {
    id?: string
    name: string
    coordinatesId: number
    DropOffs?: SeatAssignementUncheckedCreateNestedManyWithoutDropoffAddressInput
    Departures?: TripUncheckedCreateNestedManyWithoutStartAddressInput
    Arrivals?: TripUncheckedCreateNestedManyWithoutEndAddressInput
  }

  export type AdressCreateOrConnectWithoutPickUpsInput = {
    where: AdressWhereUniqueInput
    create: XOR<AdressCreateWithoutPickUpsInput, AdressUncheckedCreateWithoutPickUpsInput>
  }

  export type AdressCreateWithoutDropOffsInput = {
    id?: string
    name: string
    coordinates: CoordinatesCreateNestedOneWithoutAdressInput
    PickUps?: SeatAssignementCreateNestedManyWithoutPickupAddressInput
    Departures?: TripCreateNestedManyWithoutStartAddressInput
    Arrivals?: TripCreateNestedManyWithoutEndAddressInput
  }

  export type AdressUncheckedCreateWithoutDropOffsInput = {
    id?: string
    name: string
    coordinatesId: number
    PickUps?: SeatAssignementUncheckedCreateNestedManyWithoutPickupAddressInput
    Departures?: TripUncheckedCreateNestedManyWithoutStartAddressInput
    Arrivals?: TripUncheckedCreateNestedManyWithoutEndAddressInput
  }

  export type AdressCreateOrConnectWithoutDropOffsInput = {
    where: AdressWhereUniqueInput
    create: XOR<AdressCreateWithoutDropOffsInput, AdressUncheckedCreateWithoutDropOffsInput>
  }

  export type TripCreateWithoutSeatAssignmentsInput = {
    id?: string
    driver: MobileUserCreateNestedOneWithoutTripsDrivenInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddress: AdressCreateNestedOneWithoutDeparturesInput
    endAddress: AdressCreateNestedOneWithoutArrivalsInput
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    Vehicle: VehicleCreateNestedOneWithoutTripsInput
    description?: string | null
    realtimeTripData?: RealtimeTripDataCreateNestedManyWithoutTripInput
  }

  export type TripUncheckedCreateWithoutSeatAssignmentsInput = {
    id?: string
    driverId: string
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddressId: string
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    vehicleId: string
    description?: string | null
    realtimeTripData?: RealtimeTripDataUncheckedCreateNestedManyWithoutTripInput
  }

  export type TripCreateOrConnectWithoutSeatAssignmentsInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutSeatAssignmentsInput, TripUncheckedCreateWithoutSeatAssignmentsInput>
  }

  export type MobileUserCreateWithoutTripsTakenInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    lastLogin?: Date | string
    legajoUCA?: string | null
    birthDate?: Date | string | null
    sex?: string | null
    phone?: string | null
    isDriver?: boolean
    completedSurvey?: boolean
    TripsDriven?: TripCreateNestedManyWithoutDriverInput
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Vehicle?: VehicleCreateNestedManyWithoutDriverInput
  }

  export type MobileUserUncheckedCreateWithoutTripsTakenInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    lastLogin?: Date | string
    legajoUCA?: string | null
    birthDate?: Date | string | null
    sex?: string | null
    phone?: string | null
    isDriver?: boolean
    completedSurvey?: boolean
    TripsDriven?: TripUncheckedCreateNestedManyWithoutDriverInput
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Vehicle?: VehicleUncheckedCreateNestedManyWithoutDriverInput
  }

  export type MobileUserCreateOrConnectWithoutTripsTakenInput = {
    where: MobileUserWhereUniqueInput
    create: XOR<MobileUserCreateWithoutTripsTakenInput, MobileUserUncheckedCreateWithoutTripsTakenInput>
  }

  export type AdressUpsertWithoutPickUpsInput = {
    update: XOR<AdressUpdateWithoutPickUpsInput, AdressUncheckedUpdateWithoutPickUpsInput>
    create: XOR<AdressCreateWithoutPickUpsInput, AdressUncheckedCreateWithoutPickUpsInput>
  }

  export type AdressUpdateWithoutPickUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: CoordinatesUpdateOneRequiredWithoutAdressNestedInput
    DropOffs?: SeatAssignementUpdateManyWithoutDropoffAddressNestedInput
    Departures?: TripUpdateManyWithoutStartAddressNestedInput
    Arrivals?: TripUpdateManyWithoutEndAddressNestedInput
  }

  export type AdressUncheckedUpdateWithoutPickUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinatesId?: IntFieldUpdateOperationsInput | number
    DropOffs?: SeatAssignementUncheckedUpdateManyWithoutDropoffAddressNestedInput
    Departures?: TripUncheckedUpdateManyWithoutStartAddressNestedInput
    Arrivals?: TripUncheckedUpdateManyWithoutEndAddressNestedInput
  }

  export type AdressUpsertWithoutDropOffsInput = {
    update: XOR<AdressUpdateWithoutDropOffsInput, AdressUncheckedUpdateWithoutDropOffsInput>
    create: XOR<AdressCreateWithoutDropOffsInput, AdressUncheckedCreateWithoutDropOffsInput>
  }

  export type AdressUpdateWithoutDropOffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: CoordinatesUpdateOneRequiredWithoutAdressNestedInput
    PickUps?: SeatAssignementUpdateManyWithoutPickupAddressNestedInput
    Departures?: TripUpdateManyWithoutStartAddressNestedInput
    Arrivals?: TripUpdateManyWithoutEndAddressNestedInput
  }

  export type AdressUncheckedUpdateWithoutDropOffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinatesId?: IntFieldUpdateOperationsInput | number
    PickUps?: SeatAssignementUncheckedUpdateManyWithoutPickupAddressNestedInput
    Departures?: TripUncheckedUpdateManyWithoutStartAddressNestedInput
    Arrivals?: TripUncheckedUpdateManyWithoutEndAddressNestedInput
  }

  export type TripUpsertWithoutSeatAssignmentsInput = {
    update: XOR<TripUpdateWithoutSeatAssignmentsInput, TripUncheckedUpdateWithoutSeatAssignmentsInput>
    create: XOR<TripCreateWithoutSeatAssignmentsInput, TripUncheckedCreateWithoutSeatAssignmentsInput>
  }

  export type TripUpdateWithoutSeatAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver?: MobileUserUpdateOneRequiredWithoutTripsDrivenNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddress?: AdressUpdateOneRequiredWithoutDeparturesNestedInput
    endAddress?: AdressUpdateOneRequiredWithoutArrivalsNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    Vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutSeatAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddressId?: StringFieldUpdateOperationsInput | string
    endAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUncheckedUpdateManyWithoutTripNestedInput
  }

  export type MobileUserUpsertWithoutTripsTakenInput = {
    update: XOR<MobileUserUpdateWithoutTripsTakenInput, MobileUserUncheckedUpdateWithoutTripsTakenInput>
    create: XOR<MobileUserCreateWithoutTripsTakenInput, MobileUserUncheckedCreateWithoutTripsTakenInput>
  }

  export type MobileUserUpdateWithoutTripsTakenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoUCA?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDriver?: BoolFieldUpdateOperationsInput | boolean
    completedSurvey?: BoolFieldUpdateOperationsInput | boolean
    TripsDriven?: TripUpdateManyWithoutDriverNestedInput
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Vehicle?: VehicleUpdateManyWithoutDriverNestedInput
  }

  export type MobileUserUncheckedUpdateWithoutTripsTakenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoUCA?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDriver?: BoolFieldUpdateOperationsInput | boolean
    completedSurvey?: BoolFieldUpdateOperationsInput | boolean
    TripsDriven?: TripUncheckedUpdateManyWithoutDriverNestedInput
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Vehicle?: VehicleUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type MobileUserCreateWithoutTripsDrivenInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    lastLogin?: Date | string
    legajoUCA?: string | null
    birthDate?: Date | string | null
    sex?: string | null
    phone?: string | null
    isDriver?: boolean
    completedSurvey?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Vehicle?: VehicleCreateNestedManyWithoutDriverInput
    TripsTaken?: SeatAssignementCreateNestedManyWithoutPassengerInput
  }

  export type MobileUserUncheckedCreateWithoutTripsDrivenInput = {
    id?: string
    name: string
    surname?: string | null
    email: string
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    lastLogin?: Date | string
    legajoUCA?: string | null
    birthDate?: Date | string | null
    sex?: string | null
    phone?: string | null
    isDriver?: boolean
    completedSurvey?: boolean
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Vehicle?: VehicleUncheckedCreateNestedManyWithoutDriverInput
    TripsTaken?: SeatAssignementUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type MobileUserCreateOrConnectWithoutTripsDrivenInput = {
    where: MobileUserWhereUniqueInput
    create: XOR<MobileUserCreateWithoutTripsDrivenInput, MobileUserUncheckedCreateWithoutTripsDrivenInput>
  }

  export type SeatAssignementCreateWithoutTripInput = {
    id?: string
    pickupAddress: AdressCreateNestedOneWithoutPickUpsInput
    dropoffAddress: AdressCreateNestedOneWithoutDropOffsInput
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    passenger: MobileUserCreateNestedOneWithoutTripsTakenInput
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementUncheckedCreateWithoutTripInput = {
    id?: string
    pickupAdressId: string
    dropoffAdressId: string
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    passengerId: string
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementCreateOrConnectWithoutTripInput = {
    where: SeatAssignementWhereUniqueInput
    create: XOR<SeatAssignementCreateWithoutTripInput, SeatAssignementUncheckedCreateWithoutTripInput>
  }

  export type SeatAssignementCreateManyTripInputEnvelope = {
    data: Enumerable<SeatAssignementCreateManyTripInput>
    skipDuplicates?: boolean
  }

  export type AdressCreateWithoutDeparturesInput = {
    id?: string
    name: string
    coordinates: CoordinatesCreateNestedOneWithoutAdressInput
    PickUps?: SeatAssignementCreateNestedManyWithoutPickupAddressInput
    DropOffs?: SeatAssignementCreateNestedManyWithoutDropoffAddressInput
    Arrivals?: TripCreateNestedManyWithoutEndAddressInput
  }

  export type AdressUncheckedCreateWithoutDeparturesInput = {
    id?: string
    name: string
    coordinatesId: number
    PickUps?: SeatAssignementUncheckedCreateNestedManyWithoutPickupAddressInput
    DropOffs?: SeatAssignementUncheckedCreateNestedManyWithoutDropoffAddressInput
    Arrivals?: TripUncheckedCreateNestedManyWithoutEndAddressInput
  }

  export type AdressCreateOrConnectWithoutDeparturesInput = {
    where: AdressWhereUniqueInput
    create: XOR<AdressCreateWithoutDeparturesInput, AdressUncheckedCreateWithoutDeparturesInput>
  }

  export type AdressCreateWithoutArrivalsInput = {
    id?: string
    name: string
    coordinates: CoordinatesCreateNestedOneWithoutAdressInput
    PickUps?: SeatAssignementCreateNestedManyWithoutPickupAddressInput
    DropOffs?: SeatAssignementCreateNestedManyWithoutDropoffAddressInput
    Departures?: TripCreateNestedManyWithoutStartAddressInput
  }

  export type AdressUncheckedCreateWithoutArrivalsInput = {
    id?: string
    name: string
    coordinatesId: number
    PickUps?: SeatAssignementUncheckedCreateNestedManyWithoutPickupAddressInput
    DropOffs?: SeatAssignementUncheckedCreateNestedManyWithoutDropoffAddressInput
    Departures?: TripUncheckedCreateNestedManyWithoutStartAddressInput
  }

  export type AdressCreateOrConnectWithoutArrivalsInput = {
    where: AdressWhereUniqueInput
    create: XOR<AdressCreateWithoutArrivalsInput, AdressUncheckedCreateWithoutArrivalsInput>
  }

  export type VehicleCreateWithoutTripsInput = {
    id?: string
    model: VehicleModelCreateNestedOneWithoutVehiclesInput
    licensePlate: string
    driver: MobileUserCreateNestedOneWithoutVehicleInput
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VehicleUncheckedCreateWithoutTripsInput = {
    id?: string
    modelId: number
    licensePlate: string
    driverId: string
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VehicleCreateOrConnectWithoutTripsInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
  }

  export type RealtimeTripDataCreateWithoutTripInput = {
    id?: string
    timestamp: Date | string
    seats: number
    provider: string
    mocked: boolean
    coordinates: RealtimeCoordinatesCreateNestedOneWithoutTripDataInput
  }

  export type RealtimeTripDataUncheckedCreateWithoutTripInput = {
    id?: string
    timestamp: Date | string
    seats: number
    provider: string
    mocked: boolean
    coordinatesId: number
  }

  export type RealtimeTripDataCreateOrConnectWithoutTripInput = {
    where: RealtimeTripDataWhereUniqueInput
    create: XOR<RealtimeTripDataCreateWithoutTripInput, RealtimeTripDataUncheckedCreateWithoutTripInput>
  }

  export type RealtimeTripDataCreateManyTripInputEnvelope = {
    data: Enumerable<RealtimeTripDataCreateManyTripInput>
    skipDuplicates?: boolean
  }

  export type MobileUserUpsertWithoutTripsDrivenInput = {
    update: XOR<MobileUserUpdateWithoutTripsDrivenInput, MobileUserUncheckedUpdateWithoutTripsDrivenInput>
    create: XOR<MobileUserCreateWithoutTripsDrivenInput, MobileUserUncheckedCreateWithoutTripsDrivenInput>
  }

  export type MobileUserUpdateWithoutTripsDrivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoUCA?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDriver?: BoolFieldUpdateOperationsInput | boolean
    completedSurvey?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Vehicle?: VehicleUpdateManyWithoutDriverNestedInput
    TripsTaken?: SeatAssignementUpdateManyWithoutPassengerNestedInput
  }

  export type MobileUserUncheckedUpdateWithoutTripsDrivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    legajoUCA?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    isDriver?: BoolFieldUpdateOperationsInput | boolean
    completedSurvey?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Vehicle?: VehicleUncheckedUpdateManyWithoutDriverNestedInput
    TripsTaken?: SeatAssignementUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type SeatAssignementUpsertWithWhereUniqueWithoutTripInput = {
    where: SeatAssignementWhereUniqueInput
    update: XOR<SeatAssignementUpdateWithoutTripInput, SeatAssignementUncheckedUpdateWithoutTripInput>
    create: XOR<SeatAssignementCreateWithoutTripInput, SeatAssignementUncheckedCreateWithoutTripInput>
  }

  export type SeatAssignementUpdateWithWhereUniqueWithoutTripInput = {
    where: SeatAssignementWhereUniqueInput
    data: XOR<SeatAssignementUpdateWithoutTripInput, SeatAssignementUncheckedUpdateWithoutTripInput>
  }

  export type SeatAssignementUpdateManyWithWhereWithoutTripInput = {
    where: SeatAssignementScalarWhereInput
    data: XOR<SeatAssignementUpdateManyMutationInput, SeatAssignementUncheckedUpdateManyWithoutSeatAssignmentsInput>
  }

  export type AdressUpsertWithoutDeparturesInput = {
    update: XOR<AdressUpdateWithoutDeparturesInput, AdressUncheckedUpdateWithoutDeparturesInput>
    create: XOR<AdressCreateWithoutDeparturesInput, AdressUncheckedCreateWithoutDeparturesInput>
  }

  export type AdressUpdateWithoutDeparturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: CoordinatesUpdateOneRequiredWithoutAdressNestedInput
    PickUps?: SeatAssignementUpdateManyWithoutPickupAddressNestedInput
    DropOffs?: SeatAssignementUpdateManyWithoutDropoffAddressNestedInput
    Arrivals?: TripUpdateManyWithoutEndAddressNestedInput
  }

  export type AdressUncheckedUpdateWithoutDeparturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinatesId?: IntFieldUpdateOperationsInput | number
    PickUps?: SeatAssignementUncheckedUpdateManyWithoutPickupAddressNestedInput
    DropOffs?: SeatAssignementUncheckedUpdateManyWithoutDropoffAddressNestedInput
    Arrivals?: TripUncheckedUpdateManyWithoutEndAddressNestedInput
  }

  export type AdressUpsertWithoutArrivalsInput = {
    update: XOR<AdressUpdateWithoutArrivalsInput, AdressUncheckedUpdateWithoutArrivalsInput>
    create: XOR<AdressCreateWithoutArrivalsInput, AdressUncheckedCreateWithoutArrivalsInput>
  }

  export type AdressUpdateWithoutArrivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinates?: CoordinatesUpdateOneRequiredWithoutAdressNestedInput
    PickUps?: SeatAssignementUpdateManyWithoutPickupAddressNestedInput
    DropOffs?: SeatAssignementUpdateManyWithoutDropoffAddressNestedInput
    Departures?: TripUpdateManyWithoutStartAddressNestedInput
  }

  export type AdressUncheckedUpdateWithoutArrivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    coordinatesId?: IntFieldUpdateOperationsInput | number
    PickUps?: SeatAssignementUncheckedUpdateManyWithoutPickupAddressNestedInput
    DropOffs?: SeatAssignementUncheckedUpdateManyWithoutDropoffAddressNestedInput
    Departures?: TripUncheckedUpdateManyWithoutStartAddressNestedInput
  }

  export type VehicleUpsertWithoutTripsInput = {
    update: XOR<VehicleUpdateWithoutTripsInput, VehicleUncheckedUpdateWithoutTripsInput>
    create: XOR<VehicleCreateWithoutTripsInput, VehicleUncheckedCreateWithoutTripsInput>
  }

  export type VehicleUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput
    licensePlate?: StringFieldUpdateOperationsInput | string
    driver?: MobileUserUpdateOneRequiredWithoutVehicleNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RealtimeTripDataUpsertWithWhereUniqueWithoutTripInput = {
    where: RealtimeTripDataWhereUniqueInput
    update: XOR<RealtimeTripDataUpdateWithoutTripInput, RealtimeTripDataUncheckedUpdateWithoutTripInput>
    create: XOR<RealtimeTripDataCreateWithoutTripInput, RealtimeTripDataUncheckedCreateWithoutTripInput>
  }

  export type RealtimeTripDataUpdateWithWhereUniqueWithoutTripInput = {
    where: RealtimeTripDataWhereUniqueInput
    data: XOR<RealtimeTripDataUpdateWithoutTripInput, RealtimeTripDataUncheckedUpdateWithoutTripInput>
  }

  export type RealtimeTripDataUpdateManyWithWhereWithoutTripInput = {
    where: RealtimeTripDataScalarWhereInput
    data: XOR<RealtimeTripDataUpdateManyMutationInput, RealtimeTripDataUncheckedUpdateManyWithoutRealtimeTripDataInput>
  }

  export type RealtimeTripDataScalarWhereInput = {
    AND?: Enumerable<RealtimeTripDataScalarWhereInput>
    OR?: Enumerable<RealtimeTripDataScalarWhereInput>
    NOT?: Enumerable<RealtimeTripDataScalarWhereInput>
    id?: StringFilter | string
    tripId?: StringFilter | string
    timestamp?: DateTimeFilter | Date | string
    seats?: IntFilter | number
    provider?: StringFilter | string
    mocked?: BoolFilter | boolean
    coordinatesId?: IntFilter | number
  }

  export type CoordinatesCreateWithoutAOIInput = {
    lat: number
    lng: number
    timestamp: Date | string
    milestone?: MilestoneCreateNestedManyWithoutCoordiantesInput
    Adress?: AdressCreateNestedManyWithoutCoordinatesInput
  }

  export type CoordinatesUncheckedCreateWithoutAOIInput = {
    id?: number
    lat: number
    lng: number
    timestamp: Date | string
    milestone?: MilestoneUncheckedCreateNestedManyWithoutCoordiantesInput
    Adress?: AdressUncheckedCreateNestedManyWithoutCoordinatesInput
  }

  export type CoordinatesCreateOrConnectWithoutAOIInput = {
    where: CoordinatesWhereUniqueInput
    create: XOR<CoordinatesCreateWithoutAOIInput, CoordinatesUncheckedCreateWithoutAOIInput>
  }

  export type CoordinatesUpsertWithWhereUniqueWithoutAOIInput = {
    where: CoordinatesWhereUniqueInput
    update: XOR<CoordinatesUpdateWithoutAOIInput, CoordinatesUncheckedUpdateWithoutAOIInput>
    create: XOR<CoordinatesCreateWithoutAOIInput, CoordinatesUncheckedCreateWithoutAOIInput>
  }

  export type CoordinatesUpdateWithWhereUniqueWithoutAOIInput = {
    where: CoordinatesWhereUniqueInput
    data: XOR<CoordinatesUpdateWithoutAOIInput, CoordinatesUncheckedUpdateWithoutAOIInput>
  }

  export type CoordinatesUpdateManyWithWhereWithoutAOIInput = {
    where: CoordinatesScalarWhereInput
    data: XOR<CoordinatesUpdateManyMutationInput, CoordinatesUncheckedUpdateManyWithoutCoordinatesInput>
  }

  export type CoordinatesScalarWhereInput = {
    AND?: Enumerable<CoordinatesScalarWhereInput>
    OR?: Enumerable<CoordinatesScalarWhereInput>
    NOT?: Enumerable<CoordinatesScalarWhereInput>
    id?: IntFilter | number
    lat?: FloatFilter | number
    lng?: FloatFilter | number
    timestamp?: DateTimeFilter | Date | string
  }

  export type TripCreateWithoutRealtimeTripDataInput = {
    id?: string
    driver: MobileUserCreateNestedOneWithoutTripsDrivenInput
    seatAssignments?: SeatAssignementCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddress: AdressCreateNestedOneWithoutDeparturesInput
    endAddress: AdressCreateNestedOneWithoutArrivalsInput
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    Vehicle: VehicleCreateNestedOneWithoutTripsInput
    description?: string | null
  }

  export type TripUncheckedCreateWithoutRealtimeTripDataInput = {
    id?: string
    driverId: string
    seatAssignments?: SeatAssignementUncheckedCreateNestedManyWithoutTripInput
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddressId: string
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    vehicleId: string
    description?: string | null
  }

  export type TripCreateOrConnectWithoutRealtimeTripDataInput = {
    where: TripWhereUniqueInput
    create: XOR<TripCreateWithoutRealtimeTripDataInput, TripUncheckedCreateWithoutRealtimeTripDataInput>
  }

  export type RealtimeCoordinatesCreateWithoutTripDataInput = {
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
  }

  export type RealtimeCoordinatesUncheckedCreateWithoutTripDataInput = {
    id?: number
    accuracy: number
    altitude: number
    altitudeAccuracy: number
    heading: number
    latitude: number
    longitude: number
    speed: number
  }

  export type RealtimeCoordinatesCreateOrConnectWithoutTripDataInput = {
    where: RealtimeCoordinatesWhereUniqueInput
    create: XOR<RealtimeCoordinatesCreateWithoutTripDataInput, RealtimeCoordinatesUncheckedCreateWithoutTripDataInput>
  }

  export type TripUpsertWithoutRealtimeTripDataInput = {
    update: XOR<TripUpdateWithoutRealtimeTripDataInput, TripUncheckedUpdateWithoutRealtimeTripDataInput>
    create: XOR<TripCreateWithoutRealtimeTripDataInput, TripUncheckedCreateWithoutRealtimeTripDataInput>
  }

  export type TripUpdateWithoutRealtimeTripDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver?: MobileUserUpdateOneRequiredWithoutTripsDrivenNestedInput
    seatAssignments?: SeatAssignementUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddress?: AdressUpdateOneRequiredWithoutDeparturesNestedInput
    endAddress?: AdressUpdateOneRequiredWithoutArrivalsNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    Vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripUncheckedUpdateWithoutRealtimeTripDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    seatAssignments?: SeatAssignementUncheckedUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddressId?: StringFieldUpdateOperationsInput | string
    endAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RealtimeCoordinatesUpsertWithoutTripDataInput = {
    update: XOR<RealtimeCoordinatesUpdateWithoutTripDataInput, RealtimeCoordinatesUncheckedUpdateWithoutTripDataInput>
    create: XOR<RealtimeCoordinatesCreateWithoutTripDataInput, RealtimeCoordinatesUncheckedCreateWithoutTripDataInput>
  }

  export type RealtimeCoordinatesUpdateWithoutTripDataInput = {
    accuracy?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    altitudeAccuracy?: FloatFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
  }

  export type RealtimeCoordinatesUncheckedUpdateWithoutTripDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    altitude?: FloatFieldUpdateOperationsInput | number
    altitudeAccuracy?: FloatFieldUpdateOperationsInput | number
    heading?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    speed?: FloatFieldUpdateOperationsInput | number
  }

  export type RealtimeTripDataCreateWithoutCoordinatesInput = {
    id?: string
    trip: TripCreateNestedOneWithoutRealtimeTripDataInput
    timestamp: Date | string
    seats: number
    provider: string
    mocked: boolean
  }

  export type RealtimeTripDataUncheckedCreateWithoutCoordinatesInput = {
    id?: string
    tripId: string
    timestamp: Date | string
    seats: number
    provider: string
    mocked: boolean
  }

  export type RealtimeTripDataCreateOrConnectWithoutCoordinatesInput = {
    where: RealtimeTripDataWhereUniqueInput
    create: XOR<RealtimeTripDataCreateWithoutCoordinatesInput, RealtimeTripDataUncheckedCreateWithoutCoordinatesInput>
  }

  export type RealtimeTripDataCreateManyCoordinatesInputEnvelope = {
    data: Enumerable<RealtimeTripDataCreateManyCoordinatesInput>
    skipDuplicates?: boolean
  }

  export type RealtimeTripDataUpsertWithWhereUniqueWithoutCoordinatesInput = {
    where: RealtimeTripDataWhereUniqueInput
    update: XOR<RealtimeTripDataUpdateWithoutCoordinatesInput, RealtimeTripDataUncheckedUpdateWithoutCoordinatesInput>
    create: XOR<RealtimeTripDataCreateWithoutCoordinatesInput, RealtimeTripDataUncheckedCreateWithoutCoordinatesInput>
  }

  export type RealtimeTripDataUpdateWithWhereUniqueWithoutCoordinatesInput = {
    where: RealtimeTripDataWhereUniqueInput
    data: XOR<RealtimeTripDataUpdateWithoutCoordinatesInput, RealtimeTripDataUncheckedUpdateWithoutCoordinatesInput>
  }

  export type RealtimeTripDataUpdateManyWithWhereWithoutCoordinatesInput = {
    where: RealtimeTripDataScalarWhereInput
    data: XOR<RealtimeTripDataUpdateManyMutationInput, RealtimeTripDataUncheckedUpdateManyWithoutTripDataInput>
  }

  export type TripCreateManyDriverInput = {
    id?: string
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddressId: string
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    vehicleId: string
    description?: string | null
  }

  export type VehicleCreateManyDriverInput = {
    id?: string
    modelId: number
    licensePlate: string
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type SeatAssignementCreateManyPassengerInput = {
    id?: string
    pickupAdressId: string
    dropoffAdressId: string
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    tripId: string
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type TripUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatAssignments?: SeatAssignementUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddress?: AdressUpdateOneRequiredWithoutDeparturesNestedInput
    endAddress?: AdressUpdateOneRequiredWithoutArrivalsNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    Vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    seatAssignments?: SeatAssignementUncheckedUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddressId?: StringFieldUpdateOperationsInput | string
    endAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutTripsDrivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddressId?: StringFieldUpdateOperationsInput | string
    endAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    model?: VehicleModelUpdateOneRequiredWithoutVehiclesNestedInput
    licensePlate?: StringFieldUpdateOperationsInput | string
    trips?: TripUpdateManyWithoutVehicleNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateWithoutDriverInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    licensePlate?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SeatAssignementUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAddress?: AdressUpdateOneRequiredWithoutPickUpsNestedInput
    dropoffAddress?: AdressUpdateOneRequiredWithoutDropOffsNestedInput
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    trip?: TripUpdateOneRequiredWithoutSeatAssignmentsNestedInput
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUncheckedUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAdressId?: StringFieldUpdateOperationsInput | string
    dropoffAdressId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: StringFieldUpdateOperationsInput | string
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUncheckedUpdateManyWithoutTripsTakenInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAdressId?: StringFieldUpdateOperationsInput | string
    dropoffAdressId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: StringFieldUpdateOperationsInput | string
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    ext_expires_in?: number | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    ext_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TripCreateManyVehicleInput = {
    id?: string
    driverId: string
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddressId: string
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    description?: string | null
  }

  export type TripUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver?: MobileUserUpdateOneRequiredWithoutTripsDrivenNestedInput
    seatAssignments?: SeatAssignementUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddress?: AdressUpdateOneRequiredWithoutDeparturesNestedInput
    endAddress?: AdressUpdateOneRequiredWithoutArrivalsNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    seatAssignments?: SeatAssignementUncheckedUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddressId?: StringFieldUpdateOperationsInput | string
    endAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutTripsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddressId?: StringFieldUpdateOperationsInput | string
    endAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehicleModelCreateManyMakeInput = {
    id?: number
    model: string
    typeId: number
  }

  export type VehicleModelUpdateWithoutMakeInput = {
    model?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUpdateManyWithoutModelNestedInput
    type?: VehicleTypeUpdateOneRequiredWithoutModelsNestedInput
  }

  export type VehicleModelUncheckedUpdateWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    vehicles?: VehicleUncheckedUpdateManyWithoutModelNestedInput
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleModelUncheckedUpdateManyWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    typeId?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleModelCreateManyTypeInput = {
    id?: number
    model: string
    makeId: number
  }

  export type VehicleModelUpdateWithoutTypeInput = {
    model?: StringFieldUpdateOperationsInput | string
    make?: VehicleMakeUpdateOneRequiredWithoutModelsNestedInput
    vehicles?: VehicleUpdateManyWithoutModelNestedInput
  }

  export type VehicleModelUncheckedUpdateWithoutTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    makeId?: IntFieldUpdateOperationsInput | number
    vehicles?: VehicleUncheckedUpdateManyWithoutModelNestedInput
  }

  export type VehicleCreateManyModelInput = {
    id?: string
    licensePlate: string
    driverId: string
    maxPassengers: number
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type VehicleUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    driver?: MobileUserUpdateOneRequiredWithoutVehicleNestedInput
    trips?: TripUpdateManyWithoutVehicleNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    trips?: TripUncheckedUpdateManyWithoutVehicleNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleUncheckedUpdateManyWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    licensePlate?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MilestoneCreateManyCoordiantesInput = {
    id?: number
    friendlyName: string
  }

  export type AdressCreateManyCoordinatesInput = {
    id?: string
    name: string
  }

  export type MilestoneUpdateWithoutCoordiantesInput = {
    friendlyName?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneUncheckedUpdateWithoutCoordiantesInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendlyName?: StringFieldUpdateOperationsInput | string
  }

  export type MilestoneUncheckedUpdateManyWithoutMilestoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    friendlyName?: StringFieldUpdateOperationsInput | string
  }

  export type AdressUpdateWithoutCoordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PickUps?: SeatAssignementUpdateManyWithoutPickupAddressNestedInput
    DropOffs?: SeatAssignementUpdateManyWithoutDropoffAddressNestedInput
    Departures?: TripUpdateManyWithoutStartAddressNestedInput
    Arrivals?: TripUpdateManyWithoutEndAddressNestedInput
  }

  export type AdressUncheckedUpdateWithoutCoordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    PickUps?: SeatAssignementUncheckedUpdateManyWithoutPickupAddressNestedInput
    DropOffs?: SeatAssignementUncheckedUpdateManyWithoutDropoffAddressNestedInput
    Departures?: TripUncheckedUpdateManyWithoutStartAddressNestedInput
    Arrivals?: TripUncheckedUpdateManyWithoutEndAddressNestedInput
  }

  export type AdressUncheckedUpdateManyWithoutAdressInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AOIUpdateWithoutCoordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AOIUncheckedUpdateWithoutCoordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AOIUncheckedUpdateManyWithoutAOIInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SeatAssignementCreateManyPickupAddressInput = {
    id?: string
    dropoffAdressId: string
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    tripId: string
    passengerId: string
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type SeatAssignementCreateManyDropoffAddressInput = {
    id?: string
    pickupAdressId: string
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    tripId: string
    passengerId: string
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type TripCreateManyStartAddressInput = {
    id?: string
    driverId: string
    status: string
    price: number
    rating?: number | null
    message?: string | null
    endAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    vehicleId: string
    description?: string | null
  }

  export type TripCreateManyEndAddressInput = {
    id?: string
    driverId: string
    status: string
    price: number
    rating?: number | null
    message?: string | null
    startAddressId: string
    maxPassengers: number
    estimatedStartTime: Date | string
    estimatedArrivalTime: Date | string
    actualDepartureTime?: Date | string | null
    actualArrivalTime?: Date | string | null
    actualDistance?: number | null
    vehicleId: string
    description?: string | null
  }

  export type SeatAssignementUpdateWithoutPickupAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    dropoffAddress?: AdressUpdateOneRequiredWithoutDropOffsNestedInput
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    trip?: TripUpdateOneRequiredWithoutSeatAssignmentsNestedInput
    passenger?: MobileUserUpdateOneRequiredWithoutTripsTakenNestedInput
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUncheckedUpdateWithoutPickupAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    dropoffAdressId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUncheckedUpdateManyWithoutPickUpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dropoffAdressId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUpdateWithoutDropoffAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAddress?: AdressUpdateOneRequiredWithoutPickUpsNestedInput
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    trip?: TripUpdateOneRequiredWithoutSeatAssignmentsNestedInput
    passenger?: MobileUserUpdateOneRequiredWithoutTripsTakenNestedInput
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUncheckedUpdateWithoutDropoffAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAdressId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUncheckedUpdateManyWithoutDropOffsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAdressId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    tripId?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripUpdateWithoutStartAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver?: MobileUserUpdateOneRequiredWithoutTripsDrivenNestedInput
    seatAssignments?: SeatAssignementUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    endAddress?: AdressUpdateOneRequiredWithoutArrivalsNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    Vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutStartAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    seatAssignments?: SeatAssignementUncheckedUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    endAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutDeparturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    endAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TripUpdateWithoutEndAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver?: MobileUserUpdateOneRequiredWithoutTripsDrivenNestedInput
    seatAssignments?: SeatAssignementUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddress?: AdressUpdateOneRequiredWithoutDeparturesNestedInput
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    Vehicle?: VehicleUpdateOneRequiredWithoutTripsNestedInput
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateWithoutEndAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    seatAssignments?: SeatAssignementUncheckedUpdateManyWithoutTripNestedInput
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    realtimeTripData?: RealtimeTripDataUncheckedUpdateManyWithoutTripNestedInput
  }

  export type TripUncheckedUpdateManyWithoutArrivalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    driverId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    startAddressId?: StringFieldUpdateOperationsInput | string
    maxPassengers?: IntFieldUpdateOperationsInput | number
    estimatedStartTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedArrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    actualDepartureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualArrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDistance?: NullableFloatFieldUpdateOperationsInput | number | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementCreateManyTripInput = {
    id?: string
    pickupAdressId: string
    dropoffAdressId: string
    status: string
    qrCode: string
    userRating?: number | null
    message?: string | null
    passengerId: string
    pickupType?: string | null
    dropoffType?: string | null
  }

  export type RealtimeTripDataCreateManyTripInput = {
    id?: string
    timestamp: Date | string
    seats: number
    provider: string
    mocked: boolean
    coordinatesId: number
  }

  export type SeatAssignementUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAddress?: AdressUpdateOneRequiredWithoutPickUpsNestedInput
    dropoffAddress?: AdressUpdateOneRequiredWithoutDropOffsNestedInput
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    passenger?: MobileUserUpdateOneRequiredWithoutTripsTakenNestedInput
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAdressId?: StringFieldUpdateOperationsInput | string
    dropoffAdressId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SeatAssignementUncheckedUpdateManyWithoutSeatAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pickupAdressId?: StringFieldUpdateOperationsInput | string
    dropoffAdressId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    qrCode?: StringFieldUpdateOperationsInput | string
    userRating?: NullableIntFieldUpdateOperationsInput | number | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    passengerId?: StringFieldUpdateOperationsInput | string
    pickupType?: NullableStringFieldUpdateOperationsInput | string | null
    dropoffType?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RealtimeTripDataUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    mocked?: BoolFieldUpdateOperationsInput | boolean
    coordinates?: RealtimeCoordinatesUpdateOneRequiredWithoutTripDataNestedInput
  }

  export type RealtimeTripDataUncheckedUpdateWithoutTripInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    mocked?: BoolFieldUpdateOperationsInput | boolean
    coordinatesId?: IntFieldUpdateOperationsInput | number
  }

  export type RealtimeTripDataUncheckedUpdateManyWithoutRealtimeTripDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    mocked?: BoolFieldUpdateOperationsInput | boolean
    coordinatesId?: IntFieldUpdateOperationsInput | number
  }

  export type CoordinatesUpdateWithoutAOIInput = {
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUpdateManyWithoutCoordiantesNestedInput
    Adress?: AdressUpdateManyWithoutCoordinatesNestedInput
  }

  export type CoordinatesUncheckedUpdateWithoutAOIInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    milestone?: MilestoneUncheckedUpdateManyWithoutCoordiantesNestedInput
    Adress?: AdressUncheckedUpdateManyWithoutCoordinatesNestedInput
  }

  export type CoordinatesUncheckedUpdateManyWithoutCoordinatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RealtimeTripDataCreateManyCoordinatesInput = {
    id?: string
    tripId: string
    timestamp: Date | string
    seats: number
    provider: string
    mocked: boolean
  }

  export type RealtimeTripDataUpdateWithoutCoordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    trip?: TripUpdateOneRequiredWithoutRealtimeTripDataNestedInput
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    mocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RealtimeTripDataUncheckedUpdateWithoutCoordinatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    mocked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RealtimeTripDataUncheckedUpdateManyWithoutTripDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    tripId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    seats?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    mocked?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}