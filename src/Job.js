import React from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

import js from './assets/img/logo/js-logo.png';
import php from './assets/img/logo/php-logo.png';
import java from './assets/img/logo/java-logo.png';
import python from './assets/img/logo/py-logo.gif';
import react from './assets/img/logo/react-logo.png';
import cSharp from './assets/img/logo/csharp-logo.png';
import cPlusPlus from './assets/img/logo/cplusplus-logo.png';
import android from './assets/img/logo/android-logo.png';
import node from './assets/img/logo/node-logo.png';
import net from './assets/img/logo/net-logo.png';
import vue from './assets/img/logo/vue-logo.png';
import angular from './assets/img/logo/angular-logo.png';
import ts from './assets/img/logo/typescript-logo.png';
import ruby from './assets/img/logo/ruby-logo.png';


export default function Job({job, onClick}) {

    const renderLogos = () => {
        let lowerDescription = job.description.toLowerCase();

        const logos = [];
               
        if (lowerDescription.includes('python')) {
            logos.push(python);
        }
        if (lowerDescription.includes('react') && !lowerDescription.includes('reactive')) {
            logos.push(react);
        }
        if (lowerDescription.includes('vue')) {
            logos.push(vue);     
        }
        if (lowerDescription.includes('angular')) {
            logos.push(angular);     
        }
        if (lowerDescription.includes('c#')) {
            logos.push(cSharp);
        }
        if (lowerDescription.includes('c++')) {
            logos.push(cPlusPlus);
        }
        if (lowerDescription.includes('android')) {
            logos.push(android);
        }
        if (lowerDescription.includes('node')) {
            logos.push(node);
        }
        if (lowerDescription.includes('java') && !lowerDescription.includes('javascript')) {
            logos.push(java);
        }
        if (lowerDescription.includes('php')) {
            logos.push(php);
        }
        if (lowerDescription.includes('javascript')) {
            logos.push(js);     
        }
        if (lowerDescription.includes('typescript')) {
            logos.push(ts);     
        }
        if (lowerDescription.includes('ruby')) {
            logos.push(ruby);     
        }
        if (lowerDescription.includes('.net') && !lowerDescription.includes('.net/')) {
            logos.push(net);     
        }

        return logos;
    }

    return (
        <Paper onClick={onClick} className='job'>
            <div className='flex-align-mid'>
                <div className='job-title-location'>
                    <Typography variant="h6">{job.title}</Typography>
                    <Typography variant="h5">{job.company}</Typography>
                 <Typography>{job.location}</Typography>
                </div>
                <div className='logo-container'>
                    {
                        renderLogos().map(
                            (logo,i) => {
                                return (
                                    <img key={i} src={logo} />
                                );
                            }
                        )
                    }
                </div>
            </div>
            
            <div className='flex-align-mid'>
                <Typography>{job.created_at.split(' ').slice(0,3).join(' ')}</Typography>
            </div>
        </Paper>
    )
}