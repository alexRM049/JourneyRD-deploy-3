import React from 'react';
import { observer } from 'mobx-react-lite';
import { Container, Header, Segment } from 'semantic-ui-react';
import { useStore } from '../../app/stores/store';

export default observer(function ServerError () {
    const {commonStore} = useStore();

    return(
        <Container>
            <Header as='h1' content='Error de Servidor'/>
            <Header as='h5' color='red' content='Server Error' />
            {
                commonStore.error &&(
                    <Segment>
                        <Header as='h4' content='Error' color='teal'/>
                        {/* <code style={{marginTop: '10px'}}>{commonStore.error}</code> */}
                    </Segment>
                )
            }
        </Container>
    )
})