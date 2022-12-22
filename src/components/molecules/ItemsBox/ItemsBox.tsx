import React from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import { RootStyle } from './style';

import Box from '@mui/material/Box';
import { DateCard } from '../DateCard';

type Props = {
  mainTitle: string;
  noOfItems?: number;
  items?: any;
};

const ItemsBox = ({ mainTitle, noOfItems, items }: Props) => {
  return (
    <RootStyle>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {mainTitle}
        </Typography>
        <Avatar
          sx={{ background: '#0A68FF', height: 25, width: 25, fontSize: '15px', marginLeft: 1 }}
        >
          {noOfItems}
        </Avatar>
      </Box>
      <Box>
        <List>
          {items.map((item: any) => {
            return (
              <ListItem>
                <div>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <DateCard date={item.fromDate} />
                    {item.type === 'leave' ? (
                      <Typography
                        fontSize={5}
                        sx={{
                          padding: '0px 5px',
                        }}
                        color="#848D96"
                        variant="h6"
                      >
                        to
                      </Typography>
                    ) : null}
                    {item.type === 'leave' ? <DateCard date={item.toDate} /> : null}
                  </Box>
                </div>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Button
        sx={{
          position: 'absolute',
          bottom: 15,
          right: 15,
        }}
        type="button"
        variant="contained"
      >
        See All
      </Button>
    </RootStyle>
  );
};

export default ItemsBox;
