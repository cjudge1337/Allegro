export const fetchComments = songId => (
  $.ajax({
    method: 'GET',
    url: `/api/songs/${songId}/comments`
  })
);

export const fetchComment = commentId => (
  $.ajax({
    method: 'GET',
    url: `/api/comments/${commentId}`
  })
);

export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: { comment }
  });
};

export const deleteComment = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${id}`
  })
);
