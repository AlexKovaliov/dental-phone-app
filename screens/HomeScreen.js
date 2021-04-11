import React from 'react';
import {SectionList} from "react-native";
import {Appointment} from "../components/Group/Appointment";
import {SectionTitle} from "../components/Group/SectionTitle";
import {Ionicons} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";


const DATA = [
    {
        title: "April 11",
        data: [
            {
                time: '15:30',
                diagnosis: 'pulpit',
                user: {
                    fullname: 'Nazgul Awa',
                    avatar: 'https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka2.jpg'
                }
            },
            {
                time: '19:00',
                diagnosis: 'candidal stomatitis',
                user: {
                    fullname: 'Rickard Sotiris',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfIUfziB9vDjW9AUPZ-0YptG0JXU659dOO_w&usqp=CAU'
                }
            }
        ]
    },
    {
        title: "April 12",
        data: [
            {
                time: '10:10',
                diagnosis: 'other jaw asymmetry',
                user: {
                    fullname: 'Olavo Zlatko',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyNjje3PYnCrcNItRpZfaJdG1Pl1jE8xZPg&usqp=CAU'
                }
            }
        ]
    },
    {
        title: "April 13",
        data: [
            {
                time: '12:40',
                diagnosis: 'reverse articulation',
                user: {
                    fullname: 'Ansa Sandra',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeIVgpMyhQJ8WktCNlndoFMR48VyNJRi35g&usqp=CAU'
                }
            }
        ]
    },
];


export class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'The Patients',
        headerTintColor: '#2a86ff'
    }
    render() {
        return (
            <Container>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) => <Appointment {...item}/>}
                    renderSectionHeader={({section: {title}}) => (
                        <SectionTitle>{title}</SectionTitle>
                    )}
                />
                <PlusButton style={{
                    shadowColor: '#2a86ff', shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.7,
                    shadowRadius: 3.5,
                    elevation: 4,
                }}>
                    <Ionicons name="ios-add"
                              size={36}
                              color="#fff"
                    />
                </PlusButton>
                <StatusBar style="auto"/>
            </Container>
        )
    }
}


const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background: #2a86ff;
  position: absolute;
  right: 25px;
  bottom: 25px;
`;

const Container = styled.View`
  flex: 1;
  margin-top: 30px;
`;
