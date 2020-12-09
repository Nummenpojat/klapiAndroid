import React, { useState, useCallback } from "react";
import { View, StyleSheet, Pressable } from "react-native";

const Hamburger = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const handlePress = useCallback(() => {
        setIsExpanded(val => !val);
    }, [] );

    return
}