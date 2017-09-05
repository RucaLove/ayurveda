(function() {
  'use strict';

  const poseId = window.QUERY_PARAMETERS.id;

  if (!poseId) {
    window.location.href = '/poses.html';
  }

  const renderPose = function(pose) {
    $('#pose_name_english').val(poses.pose_name_english);
    $('#category').val(poses.category);
    $('#chakra').val(poses.chakra);
    $('#description').text(poses.description);
    $('#photo').val(poses.poseImg);
    $('#cancel').attr('href', `/poses.html?id=${poses.id}`);

    Materialize.updateTextFields();
  };

  const attachListeners = function(pose) {
    // eslint-disable-next-line max-statements
    $('#editPoseForm').submit((event) => {
      event.preventDefault();

      const pose_name_english = $('#pose_name_english').val().trim();
      const category = $('#category').val().trim();
      const chakra = $('#chakra').val().trim();
      const description = $('#description').val().trim();
      const poseImg = $('#photo').val().trim();

      if (!pose_name_english) {
        return Materialize.toast('Pose name must not be blank', 3000);
      }

      if (!category) {
        return Materialize.toast('Category must not be blank', 3000);
      }

      if (!chakra) {
        return Materialize.toast('Chakra must not be blank', 3000);
      }

      if (!description) {
        return Materialize.toast('Description must not be blank', 3000);
      }

      if (!poseImg) {
        return Materialize.toast('Image must not be blank', 3000);
      }

      const options = {
        contentType: 'application/json',
        data: JSON.stringify({ pose_name_english, category, chakra, description, poseImg }),
        dataType: 'json',
        type: 'PATCH',
        url: `/poses/${pose.id}`
      };

      $.ajax(options)
        .done(() => {
          window.location.href = `/poses.html?id=${pose.id}`;
        })
        .fail(($xhr) => {
          Materialize.toast($xhr.responseText, 3000);
        });
    });
  };

  $.getJSON(`/poses/${poseId}`)
    .done((pose) => {
      renderPose(pose);
      attachListeners(pose);
    })
    .fail(() => {
      Materialize.toast('Unable to retrieve pose', 3000);
    });
})();
