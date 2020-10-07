import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';

export const Container = styled.View`
  width: 100%;
  margin: 20px 10px 20px 60px;
  padding: 0 10px 0 0;
  flex-direction: row;
`;

export const ImageWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-right: 50px;
`;

export const ShimmerImage = styled(ShimmerPlaceHolder)`
  height: 100px;
  width: 100%;
`;

export default function LoadingList({ list }) {
  function shimmerRow(numberRow) {
    const shimmerRows = [];
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < numberRow; index++) {
      shimmerRows.push(
        <Container key={index}>
          <ImageWrapper>
            <ShimmerImage autoRun />
          </ImageWrapper>
        </Container>
      );
    }
    return shimmerRows;
  }

  return shimmerRow(list);
}

LoadingList.propTypes = {
  list: PropTypes.number,
};

LoadingList.defaultProps = {
  list: 5,
};
