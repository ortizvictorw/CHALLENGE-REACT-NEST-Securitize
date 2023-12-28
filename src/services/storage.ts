export class LocalStorageService {
    static saveData(key: string, data: any): void {
        try {
            const serializedData = JSON.stringify(data);
            localStorage.setItem(key, serializedData);
        } catch (error) {
            console.error('Error saving to localStorage:', error);
        }
    }

    static getData(key: string): any {
        try {
            const serializedData = localStorage.getItem(key);
            if (serializedData === null) {
                return null;
            }
            const data = JSON.parse(serializedData);
            return data;
        } catch (error) {
            return null;
        }
    }

    static deleteData(key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('Error deleting data from localStorage:', error);
        }
    }
}

const dataToSave = { name: 'Example', age: 30 };
const key = 'userData';

LocalStorageService.saveData(key, dataToSave);

const retrievedData = LocalStorageService.getData(key);
console.log('Retrieved data:', retrievedData);

// Delete data
LocalStorageService.deleteData(key);

