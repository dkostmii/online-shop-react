export interface LoadedDevice {
    name: string;
    imageLink: string;
    description: string;
    price: number;
    id: string;
    quantity: number;
}

export interface CartContextType {
    cartItems: LoadedDevice[];
    addToCart: (item: LoadedDevice) => void;
    removeFromCart: (idToRemove: string) => void;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onIncrease: (itemName: string) => void;
    onDecrease: (itemName: string) => void;
}

export interface BuyNowDialog {
    isOpen:  boolean;
    onClose: () => void;
    productName: string;
  }

export interface SideFilterProps {
    onChoseBrand: (title: string) => void;
}

export interface UserData {
    productName: string;
    userName?: string;
    userPhone?: string;
    email?: string;
    address?: string;
}