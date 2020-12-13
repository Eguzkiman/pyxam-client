import React, {useState, useEffect}  from 'react';

// import { Props } from './AdminPage.types';
import styles from './_AdminPage.module.scss';
import { Box,Text, Button, Tabs, TabList, Tab, Icon } from "@chakra-ui/react";
import api from "api"
import { useQuery, ReactQueryCacheProvider, QueryCache, useMutation } from 'react-query'
import Editor from 'components/Editor'
import { FiPlay } from 'react-icons/fi'
// import { forEach } from 'lodash';


const AdminPage: React.FC = () => {
    // static displayName = 'AdminPage';

    // render(): JSX.Element {
        // const { className } = this.props;
 
        const queryCache = new QueryCache()
        const [ExamNumberDisplayed, setExamNumberDisplayed] = useState <number>(0)
        const [CurrentTab, setCurrentTab] = useState <number>(1)
        const {data, isLoading, error} = useQuery('ExamAttempts', () => api.get('/attempts'))
        const [TitleDisplayed, setTitleDisplayed] = useState <string>("Respuestas del Exámen")
        
        let [runCode, runCodeResult] = useMutation(
        (code: string): Promise<any> => {
            return api.post('/run_python', { code } )
        })


        return (
            <ReactQueryCacheProvider queryCache={queryCache}>
                
                <div className={`${styles.AdminPage}`}>
                {/* <div className={`${styles.AdminPage} ${className || ''}`}> */}
                    <Box id="LeftBox" border="1px" borderColor="lightgrey"  display="flex" alignItems="center" justifyContent="space-around" flexDirection="column">
                        <Box className="Title" width="100%" height="20%"  display="flex" alignItems="center" justifyContent="space-around" border="1px" borderColor="lightgrey">
                            <Text fontSize="40px" textAlign="center">{ TitleDisplayed === "Respuestas del Exámen" ? TitleDisplayed : `Respuestas de ${TitleDisplayed} -->`}</Text>
                        </Box>
                        <Box overflow="auto" className="Answers" width="100%" height="70%" border="1px" borderColor="lightgrey">
                            
                            {data?.data.map((attempt:any) => (
                            <Button onClick={() => {setExamNumberDisplayed(attempt.id - 1); setTitleDisplayed(attempt.username)}} key={attempt.id} width="100%" height="50px" colorScheme="green" variant="ghost" display="flex" alignItems="center" justifyContent="center">
                                {attempt.username}
                            </Button>
                            ))}

                        </Box>
                    </Box>
                    <Box id="RightBox" position="relative" border="1px" borderColor="lightgrey">
                        <Box id="TopBox" position="relative" overflow="auto" width="100%" height="70%" border="1px" borderColor="lightgrey">

                            <Tabs>
                                <TabList>
                                    <Tab onClick={() => setCurrentTab(1)} >Pregunta 1</Tab>
                                    <Tab onClick={() => setCurrentTab(2)} >Pregunta 2</Tab>
                                    <Tab onClick={() => setCurrentTab(3)} >Pregunta 3</Tab>
                                    <Tab onClick={() => setCurrentTab(4)} >Pregunta 4</Tab>
                                    <Tab onClick={() => setCurrentTab(5)} >Pregunta 5</Tab>
                                </TabList>
                            </Tabs>                    

                            <Editor
                                value={data?.data[ExamNumberDisplayed][`a${CurrentTab}`]}
                                // onChange={(code) => {
                                //     setAttempt({
                                //         ...attempt,
                                //         [currentQuestionField]: code,
                                //     })
                                // }}
                                onChange={() => console.log("editor changed")}
                                onSubmit={runCode}
                            />

                            <Button onClick={() => runCode(data?.data[ExamNumberDisplayed][`a${CurrentTab}`])} leftIcon={<Icon as={FiPlay} />} zIndex="1" position="absolute" bottom="20px" right="35px" colorScheme="green" variant="outline">Run</Button>

                        </Box>
                        <Box id="BottomBox" width="100%" height="30%" border="2px" borderColor="lightgrey">

                            <Box width="100%" height="15%" display="flex" justifyContent="center" alignItems="center" border="1px" borderColor="lightgrey">
                                <Text textAlign="center">
                                    Terminal
                                </Text>
                            </Box>

                            <br/>

                            {runCodeResult.isLoading ? (
                                <pre>running...</pre>
                            ) : (
                                <pre>{runCodeResult.data?.data?.result}</pre>
                            )}
                        </Box>
                    </Box>
                </div>
            </ReactQueryCacheProvider>
        );
    // }
}

export default AdminPage;
