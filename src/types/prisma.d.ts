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
