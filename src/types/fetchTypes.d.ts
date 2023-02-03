import {
  Adress,
  Coordinates,
  MobileUser,
  RealtimeCoordinates,
  RealtimeTripData,
  SeatAssignement,
  Trip,
  Vehicle,
  VehicleModel,
  VehicleMake,
  VehicleType,
} from './prisma';

export type GetTripsResponseSeats = {
  coords: Coordinates;
  id: string;
  pickupAdressId: string;
  dropoffAdressId: string;
  status: string;
  qrCode: string;
  userRating: number | null;
  message: string | null;
  tripId: string;
  passengerId: string;
  pickupType: string | null;
  dropoffType: string | null;
  pickupAddress: Adress & {
    coordinates: Coordinates;
  };
  dropoffAddress: Adress & {
    coordinates: Coordinates;
  };
  passenger: MobileUser;
}

export type GetTripsResponse = {
  id: string;
  SeatAssignments: GetTripsResponseSeats[];
  maxPassengers: number;
  startAddress: {
    address: string;
    coords: Coordinates;
  };
  endAddress: {
    address: string;
    coords: Coordinates;
  };
  startTime: Date;
  endTime: Date;
  price: number;
  driver: {
    name: string;
    email: string;
  };
  status: string;
  estimatedStartTime: Date;
  estimatedArrivalTime: Date;
  vehicleId: string;
  description: string | null;
  realTimeData: (RealtimeTripData & {
    coordinates: RealtimeCoordinates;
  })[];
  Vehicle: {
    VehicleModel: {
      model: string;
    };
    VehicleMake: {
      make: string;
    };
    VehicleType: {
      type: string;
    };
  };
};

export type GetPassengerTripsResponse = SeatAssignement & {
  trip: GetTripsResponse;
  Trip: {
    id: string;
    maxPassengers: number;
    startAddress: {
      address: string;
      coords: Coordinates;
    };
    endAddress: {
      address: string;
      coords: Coordinates;
    };
    startTime: Date;
    endTime: Date;
    price: number;
    driver: {
      name: string;
      email: string;
    };
    status: string;
    estimatedStartTime: Date;
    estimatedArrivalTime: Date;
    vehicleId: string;
    description: string | null;
    realTimeData: (RealtimeTripData & {
      coordinates: RealtimeCoordinates;
    })[];
    Vehicle: {
      VehicleModel: {
        model: string;
      };
      VehicleMake: {
        make: string;
      };
      VehicleType: {
        type: string;
      };
    };
  };
};

export type ActiveTrip = {
  id: string;
  maxPassengers: number;
  startAddress: {
    address: string;
    coords: Coordinates;
  };
  endAddress: {
    address: string;
    coords: Coordinates;
  };
  startTime: Date;
  endTime: Date;
  price: number;
  driver: {
    name: string;
    email: string;
  };
  status: string;
  estimatedStartTime: Date;
  estimatedArrivalTime: Date;
  vehicleId: string;
  description: string | null;
  realTimeData: (RealtimeTripData & {
    coordinates: RealtimeCoordinates;
  })[];
  Vehicle: {
    VehicleModel: {
      model: string;
    };
    VehicleMake: {
      make: string;
    };
    VehicleType: {
      type: string;
    };
  };

  userSeatAssignment: Trip & {
    realtimeTripData: (RealtimeTripData & {
      coordinates: RealtimeCoordinates;
    })[];
    Vehicle: Vehicle & {
      model: VehicleModel & {
        type: VehicleType;
        make: VehicleMake;
      };
    };
    driver: MobileUser;
    startAddress: Adress & {
      coordinates: Coordinates;
    };
    endAddress: Adress & {
      coordinates: Coordinates;
    };
  };
  hasBeenRequested: boolean;
};


export type GetSeatBookingResponse = {
  User: MobileUser;
  dropoffAddress: {
    coords: Coordinates;
    id: string;
    name: string;
    coordinatesId: number;
    coordinates: Coordinates;
  };
  pickupAddress: {
    coords: Coordinates;
    id: string;
    name: string;
    coordinatesId: number;
    coordinates: Coordinates;
  };
  id: string;
  pickupAdressId: string;
  dropoffAdressId: string;
  status: string;
  qrCode: string;
  userRating: number | null;
  message: string | null;
  tripId: string;
  passengerId: string;
  pickupType: string | null;
  dropoffType: string | null;
  passenger: MobileUser;
}
