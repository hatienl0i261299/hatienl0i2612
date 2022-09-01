import { observer } from 'mobx-react-lite';
import Image from 'next/image';
import React from 'react';
import { useAppStore } from '../store/appStore';
import { map } from 'lodash';

const Skill: React.FC = observer(() => {

    const appStore = useAppStore();

    return (
        <>
            <div id="widget1" className="card mt-4">
                <div className="card-body">
                    <div className="widget-content"><h4 className="widget-title card-title">My Skills</h4>
                        <div className="table-responsive-sm">
                            <table className="table align-middle table-hover" id="table-skill">
                                <thead>
                                <tr className="text-center">
                                    <th scope="col" style={{ width: '30%' }}>Technologies</th>
                                    <th scope="col" style={{ width: '10%' }}>Exp</th>
                                </tr>
                                </thead>
                                <tbody>
                                {map(appStore.dataSkill, (value, index) => {
                                    return (
                                        <tr key={value.name + index}>
                                            <td>
                                            <div className={'d-flex gap-2'}>
                                                <Image src={value.img} width={23} height={20} />
                                                {value.name}
                                            </div>
                                            </td>
                                            <td className="text-center">
                                                <span>{value.name}</span>
                                            </td>
                                        </tr>
                                    )
                                })}
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
});

export default Skill;
