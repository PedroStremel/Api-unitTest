import "@testing-library/jest-dom";
import { getByTestId, render, screen } from "@testing-library/react";
import ListItem from '../ListItem/ListItem.jsx';
import { AppContext } from "../../context/AppContext.jsx";
import userEvent from "@testing-library/user-event";


describe('ListItem component', () => {
    const mockedItem = {
        id: 1,
        name: "bulbassaur",
        sprites: {
            other: {
                'official-artwork': {
                    front_default: ''
                },
            },
        },
    }

    const mockedItems = [
        mockedItem,
        {
            id: 2,
            name: "ivsaur",
            sprites: {
                other: {
                    'official-artwork': {
                        front_default: ''
                    },
                },
            },
        }
    ]

    
    

    it('should render correctly', () => {
        render(<ListItem item={mockedItem} />);
        expect(screen.getByTestId("list-item-1")).toBeInTheDocument();
    });

    it('should add correctly', ()=> {
        const addMock = jest.fn();
        const mockedFavorite = {favorites: [], add: addMock };
        render(
        <AppContext.Provider value={mockedFavorite}>
            <ListItem item={mockedItem} />
        </AppContext.Provider>);
        userEvent.click(screen.getByTestId('heart-1'));
        expect(addMock).toHaveBeenCalledWith(mockedItem);
        
    });

    it('should remove correctly', ()=> {
        const mockRemove = jest.fn();
        const mockedUnfavorite = {favorites: [1], remove: mockRemove};
        render(
        <AppContext.Provider value={mockedUnfavorite}>
            <ListItem item={mockedItem} />
        </AppContext.Provider> )
        userEvent.click(screen.getByTestId('heart-1'));
        expect(mockRemove).toHaveBeenCalledWith(mockedItem);
    })
    

    
})
