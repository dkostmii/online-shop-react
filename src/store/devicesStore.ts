import { action, runInAction, makeObservable, observable } from "mobx";
import { LoadedDevice } from '../interfaces/interfaces';
import fetchData from "../api/fetchData";

class DevicesStore {
    loadedDevices: LoadedDevice[] = [];
    isLoading: boolean = false;
    error: string = '';

    loadDevices = async () => {
        this.isLoading = true;
        try {
            const devices = await fetchData();
            // this.loadedDevices = devices;
            runInAction(() => {
                this.loadedDevices = devices;
                this.error = '';
            });
        } catch (error) {
            console.error("Error loading devices:", error);
            this.error = String(error);
        } finally {
            this.isLoading = false;
        }
    };

    constructor() {
        makeObservable(this, {
            loadedDevices: observable,
            isLoading: observable,
            error: observable,
            loadDevices: action
        });
    }
};

export default DevicesStore;