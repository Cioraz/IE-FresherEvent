import { Container } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import Typed from 'react-typed'

const body = () => {
    return (
        <Container maxW="20xl" p="15%" centerContent>
            <Text fontSize="30px" paddingBottom="30px">
                <Typed strings={["The Story title or some catchphrase ?"]} typeSpeed={40} backSpeed={50} loop />
            </Text>
            <Text fontSize="20px">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus explicabo tempora aut voluptatem quas repellat, enim numquam quasi reprehenderit harum impedit ea quidem in ipsam dolores nihil, eligendi ratione! Fuga aspernatur provident architecto distinctio repellat unde, consequuntur quisquam. Cum voluptatum qui ut officia, adipisci doloremque voluptas maiores ipsum iste architecto assumenda ex quos quidem ratione quam earum deleniti harum dolorem labore. Nesciunt qui temporibus, deleniti consectetur dolorum, possimus quae illum hic impedit, quaerat eius enim culpa! Dolore laborum natus, labore eos quam obcaecati aliquam eaque a nostrum voluptatum? Amet id laborum voluptates, ut provident necessitatibus optio facere, neque dolore, voluptatem incidunt ab quas mollitia repellendus. <a href='linkToWebsiteB' id='hidden'>Possimus</a> voluptatum sit quod omnis ea eos! Aliquid nulla aliquam, eligendi consequuntur iusto animi iste laborum sequi, repellat nihil ut quisquam ullam! Temporibus nesciunt quam quidem animi consequatur excepturi amet ratione consequuntur numquam odit fugiat quibusdam delectus, a, iste debitis ab praesentium, repudiandae itaque earum. Accusantium nulla eaque maxime vel? Laborum repellendus, cumque quasi sed eaque aut ipsum quibusdam dolorem iste similique neque adipisci deleniti unde sequi nihil cum excepturi? Aperiam similique minima ab a? Dolorem nihil aut ipsam repudiandae quod exercitationem. Blanditiis excepturi sequi eos, facilis ipsa omnis, molestias maxime, vero temporibus quaerat quasi?
            </Text>
        </Container>

    )
}

export default body
