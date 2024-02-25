import "@testing-library/jest-dom";
import { getByTestId, render, screen } from "@testing-library/react";
import ListItem from "../ListItem/ListItem";
import List from '../List/List';
describe('List content', ()=> {
    const mockedItems = [];
    const item = {
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

    it('should map correctly', ()=> {
        const mockedMap = mockedItems.map((item) => {
            
            return (
                <ListItem item={item} />
            )
        })
        render(<List>
            <ul>
                {mockedMap}
            </ul>
        </List>);
        expect(screen.getByTestId('list')).toBeInTheDocument();
        
    });

});