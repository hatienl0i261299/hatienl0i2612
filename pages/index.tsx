import { map } from 'lodash';
import { observer } from 'mobx-react-lite';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useAppStore } from '../store/appStore';
import MyWrap from './_wrap';

const Home: NextPage = observer(() => {

    const appStore = useAppStore();

    return (
        <>
            <MyWrap children={<>
                <div className="intro">
                    <h2 className="text-uppercase pt-5 pb-4"><strong>HA TIEN LOI</strong></h2>
                    <a className="p-2" href="https://github.com/hatienl0i261299" target="_blank">
                        <img alt="GitHub User's stars"
                             src="https://img.shields.io/github/stars/hatienl0i261299?style=social&label=Github%20Starts&cacheSeconds=3600"/>
                    </a>
                    <a className="p-2" href="https://github.com/hatienl0i261299" target="_blank">
                        <img alt="GitHub followers"
                             src="https://img.shields.io/github/followers/hatienl0i261299?label=GitHub%20followers&style=social&cacheSeconds=3600"/>
                    </a>
                    <a className="p-2" href="https://github.com/ytdl-org/youtube-dl" target="_blank">
                        <img alt=""
                             src="https://img.shields.io/github/stars/ytdl-org/youtube-dl?label=Contributor%20for%20ytdl&style=social&cacheSeconds=3600"/>
                    </a>
                    <a className="p-2" href="https://github.com/yt-dlp/yt-dlp" target="_blank">
                        <img alt=""
                             src="https://img.shields.io/github/stars/yt-dlp/yt-dlp?label=Contributor%20for%20yt-dlp&style=social&cacheSeconds=3600"/>
                    </a>

                    <p className="pt-2 text-justify"><br/>
                        <Image src={'/Hi.gif'} width={25} height={25} /> My name is
                        Ha Tien Loi. Full-Stack Developer.<br/> I was born in 1999, I am a student at Posts
                            and Telecommunications Institute of Technology (PTIT), major is
                            Telecommunications. I have one year experience as the developer and freelance developer. The
                            goal of our job is to always create good
                            quality products for the company. And being able to work in an
                            environment with friendly colleagues, perfecting myself day by day.
                            <br/>Give me a task 🤓 and trust me, I'll get everything done and perfect.
                    </p>
                </div>

                <div className="resume-section">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <h6 className="section-subtitle">RESUME</h6>
                            <h2 className="section-title">EDUCATION</h2>
                            <ul className="time-line">
                                <li className="time-line-item" style={{ fontSize: 'xx-large' }}>
                                    <span className="badge badge-primary">2017 - 2022</span>
                                    <h6 className="time-line-item-title">Student at PTIT</h6>
                                    <p className="time-line-item-subtitle">Student, PTIT</p>
                                    <p className="time-line-item-content">I am a student at Posts
                                        and Telecommunications Institute of Technology (PTIT), my major is
                                        Telecommunications.</p>
                                </li>
                                <li className="time-line-item">
                                    <span className="badge badge-primary">15/9/2020</span>
                                    <h6 className="time-line-item-title">Certificate The Hackerrank Algorithm</h6>
                                    <p className="time-line-item-subtitle">Certificate</p>
                                    <p className="time-line-item-content">Completed the assessment the skill algorithms
                                        problem solving
                                        (intermediate)
                                        <strong>
                                            <Link href="/certificate_hackerrank">
                                                {appStore.displayText}
                                            </Link>
                                        </strong>
                                    </p>
                                </li>
                                <li className="time-line-item">
                                    <span className="badge badge-primary">06/2018 - 08/2018</span>
                                    <h6 className="time-line-item-title">Certificate The Algorithm Course</h6>
                                    <p className="time-line-item-subtitle">Certificate</p>
                                    <p className="time-line-item-content">Certificate the course of Applications of
                                        algorithm
                                        organized by
                                        Samsung and PTIT.
                                        <a href="https://i.postimg.cc/J7sJNvZf/117966339-607187703273273-8694685174931126159-n.jpg"
                                           target="_blank">
                                            <strong>{appStore.displayText}</strong>
                                        </a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h6 className="section-subtitle">RESUME</h6>
                            <h2 className="section-title">Work Experience</h2>
                            <ul className="time-line">
                                <li className="time-line-item">
                                    <span className="badge badge-primary">05/2021 - Present</span>
                                    <h6 className="time-line-item-title">Developer at VMO group</h6>
                                    <p className="time-line-item-subtitle">Python Developer at VMO Japan</p>
                                    <p className="time-line-item-content">
                                        Develop and maintain the project which using python, reactjs.
                                    </p>
                                </li>
                                <li className="time-line-item">
                                    <span className="badge badge-primary">11/2018 - Present</span>
                                    <h6 className="time-line-item-title">Freelancer</h6>
                                    <p className="time-line-item-subtitle">Python Developer</p>
                                    <p className="time-line-item-content">
                                        During that time I have been
                                        working on the following projects in <strong><Link href={'/projects'}>Here</Link></strong>
                                    </p>
                                </li>
                                <li className="time-line-item">
                                    <span className="badge badge-primary">08/2018 - 11/2018</span>
                                    <h6 className="time-line-item-title">Internship Developer at VCCorp Group</h6>
                                    <p className="time-line-item-subtitle">Python web Developer</p>
                                    <p className="time-line-item-content">During my internship I worked on a project on
                                        web
                                        programming use Django - Framework
                                        to a build website in python. I built a website voice recognition. This website
                                        use
                                        Django, sqlite for backend and bootstrap 4, reactjs for frontend.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr/>
                <div>
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="row">
                                <div className="col-12">
                                    <h6 className="section-subtitle">WHAT I DO</h6>
                                    <h2 className="section-title">My PROJECTS</h2>
                                    <ul className="time-line">
                                        {map(appStore.dataProjects, (project, index) => (
                                            <li className="time-line-item" key={project.business + index}>
                                                <h6 className="time-line-item-title">{`${index + 1}. ${project.business}`}</h6>
                                                <p className="time-line-item-content">
                                                    <strong><Link href={'/projects'}>{appStore.displayText}</Link></strong>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <hr/>
                                <div className="col-12">
                                    <h6 className="section-subtitle">WHAT I DO</h6>
                                    <h2 className="section-title">My BLOGS</h2>
                                    <ul className="time-line">
                                        {map(appStore.dataBlogs, (blog, index) => (
                                            <li className="time-line-item" key={blog.name + index}>
                                                <h6 className="time-line-item-title">
                                                    {`${index + 1}. ${blog.name}`}
                                                </h6>
                                                <p className="time-line-item-content">
                                                    <strong>
                                                        <Link href={`blogs/${blog.slug}`}>{appStore.displayText}</Link>
                                                    </strong>
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <h6 className="section-subtitle">WHAT I DO</h6>
                            <h2 className="section-title">My Github Stats</h2>
                            <img src={'/code.gif'} width={'100%'} id={'codegif'} style={{ cursor: 'pointer', borderRadius: '5px' }} alt={''}/>
                            <img alt="" width="100%" id="github_stat_4" src=""/>
                            <img alt="" width="100%" id="github_stat_1" src=""/>
                            <img alt="" width="100%" id="github_stat_2" src=""/>
                            <img alt="" width="100%" id="github_stat_3" src=""/>
                        </div>
                    </div>
                </div>
            </>} title={'Home'}/>
        </>
    );
});

export default Home;
