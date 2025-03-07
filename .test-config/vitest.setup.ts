import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
    })),
});

// Mock window.localStorage
const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    clear: vi.fn(),
    removeItem: vi.fn(),
    length: 0,
    key: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
});

// Mock window.ResizeObserver
window.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
    useRouter: vi.fn(() => ({
        push: vi.fn(),
        replace: vi.fn(),
        back: vi.fn(),
        forward: vi.fn(),
    })),
    usePathname: vi.fn(),
    useSearchParams: vi.fn(() => new URLSearchParams()),
}));

// Mock leaflet
const mockMap = {
    setView: vi.fn().mockReturnThis(),
    remove: vi.fn(),
    addLayer: vi.fn(),
};

const mockTileLayer = {
    addTo: vi.fn().mockReturnThis(),
};

const mockMarker = {
    addTo: vi.fn().mockReturnThis(),
    setLatLng: vi.fn().mockReturnThis(),
};

const mockCircle = {
    addTo: vi.fn().mockReturnThis(),
    setLatLng: vi.fn().mockReturnThis(),
};

const mockIcon = {
    iconUrl: '',
    iconRetinaUrl: '',
    shadowUrl: '',
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    popupAnchor: [0, 0],
    tooltipAnchor: [0, 0],
    shadowSize: [0, 0],
};

vi.mock('leaflet', () => ({
    default: {
        map: vi.fn(() => mockMap),
        tileLayer: vi.fn(() => mockTileLayer),
        marker: vi.fn(() => mockMarker),
        circle: vi.fn(() => mockCircle),
        icon: vi.fn(() => mockIcon),
    },
}));