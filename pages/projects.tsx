import { observer } from 'mobx-react-lite';
import { NextPage } from 'next';
import MyWrap from './_wrap';

const Projects: NextPage = observer(() => {

    return (
        <MyWrap title={'Projects'} children={<>

        </>} />
    )
});

export default Projects;
