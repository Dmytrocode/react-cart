import styled from 'styled-components';

import IconButton from '@material-ui/core/IconButton'

export const Wrapper = styled.div`
    margin: 40px;
    

`;

export const StyledButton = styled(IconButton)`

    position: fixed;
    z-index: 100; //Placed over any content in the site

    //TOP RIGHT
    right: 20px;
    top: 20px;

`;