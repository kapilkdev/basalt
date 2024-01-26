// src/controllers/weather.controller.ts
import { Request, Response } from 'express';
import WhetherModel from '../model/weatherModel';

export const createWeather = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            location,
            flag,
            whetherImage,
            temperature,
            windPerHour,
            windDir,
            lastUpdated,
            humidity,
            cloud,
        } = req.body;

        const newWeather = new WhetherModel({
            location,
            flag,
            whetherImage,
            temperature,
            windPerHour,
            windDir,
            lastUpdated,
            humidity,
            cloud,
        });

        const savedWeather = await newWeather.save();
        res.status(201).json(savedWeather);
    } catch (error) {
        console.error('Error creating weather data:', error);
        res.status(500).json({ error: 'Internal Server Error - Unable to create weather data' });
    }
};

export const getWeather = async (_req: Request, res: Response): Promise<void> => {
    try {
        const weatherData = await WhetherModel.find();
        res.json(weatherData);
    } catch (error) {
        console.error('Error getting weather data:', error);
        res.status(500).json({ error: 'Internal Server Error - Unable to retrieve weather data' });
    }
};