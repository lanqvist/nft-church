export type MobileMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    navigate?: (to: string) => void;
};
