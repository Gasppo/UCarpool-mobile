import React, { useMemo } from 'react';
import { Animated } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

export const useAnimated = (data: {
    showBottomBox: boolean,
    topBarHeight: number,
    height: number,
    bottomTabHeight: number,
    tripIsSelected: boolean,
}) => {

    const { showBottomBox, bottomTabHeight, height, tripIsSelected, topBarHeight } = data
    const USABLE_HEIGHT = useSafeAreaFrame().height;
    const selectedTripPosition = useMemo(() => new Animated.Value(-200), []);
    const arrowSpinValue = useMemo(() => new Animated.Value(0), []);
    const borderRadii = useMemo(() => new Animated.Value(15), []);
    const searchResultsPosition = useMemo(() => new Animated.Value(55 - (USABLE_HEIGHT - topBarHeight - bottomTabHeight)), [USABLE_HEIGHT, bottomTabHeight, topBarHeight])


    React.useEffect(() => {
        if (showBottomBox) {
            //Mostrar resultados
            Animated.parallel([
                Animated.timing(searchResultsPosition, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(arrowSpinValue, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(borderRadii, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }),
            ]).start();
        }
        else {
            //No mostrar resultados
            Animated.parallel([
                Animated.timing(searchResultsPosition, {
                    toValue: 55 - (USABLE_HEIGHT - topBarHeight - bottomTabHeight),
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(arrowSpinValue, {
                    toValue: 1,
                    duration: 200,
                    useNativeDriver: false,
                }),
                Animated.timing(borderRadii, {
                    toValue: 15,
                    duration: 200,
                    useNativeDriver: false,
                }),

            ]).start();
        }
    }, [showBottomBox, topBarHeight, height, bottomTabHeight, searchResultsPosition, arrowSpinValue, borderRadii, USABLE_HEIGHT])

    React.useEffect(() => {
        if (tripIsSelected) {
            Animated.timing(selectedTripPosition, { toValue: 80, duration: 200, useNativeDriver: false }).start();
        }
        else {
            Animated.timing(selectedTripPosition, { toValue: -300, duration: 200, useNativeDriver: false }).start();
        }

    }, [tripIsSelected, selectedTripPosition]);


    return { selectedTripPosition, searchResultsPosition, arrowSpinValue, borderRadii, listHeight: USABLE_HEIGHT - topBarHeight - bottomTabHeight }
}
